const Figma = require("figma-js");
const got = require("got");
const { logger, iconType, getIconType } = require("../utils");

class IconComponent {
  static type = iconType;
  static is(node) {
    return node.type === "COMPONENT";
  }

  static formatIconComponent({
    node,
    parents,
    data,
    formatIconName,
    formatIconType,
  }) {
    const { name, id } = node;
    const { description = "", key } = data.components[node.id];
    const { width, height } = node.absoluteBoundingBox;
    const groupNode = parents.find((i) => i.type === "GROUP");
    const parentNames = parents.map((p) => p.name);
    let iconName = name.toLowerCase().replace(/_/g, "-");
    if (formatIconName) {
      iconName = formatIconName(iconName);
    }
    const iconType = formatIconType
      ? formatIconType(iconName)
      : getIconType(iconName);

    logger.info(`Find figma icon: ${iconName}，type: ${iconType}`);

    return {
      name: iconName,
      type: iconType,
      id,
      key,
      description,
      width,
      height,
      groupName: groupNode ? groupNode.name : "",
      parentNames,
    };
  }
}

/**
 * @class FigmaIcon
 */
class FigmaIcon {
  /**
   * 解析 fileId
   * @param {String} figmaUrl
   * @returns
   */
  static formatFileIdByUrl(figmaUrl) {
    let fileId = null;
    try {
      fileId = figmaUrl.match(/file\/([a-z0-9]+)\//i)[1];
    } catch (e) {
      throw Error("Cannot find FIGMA_FILE_URL key in process.");
    }
    return fileId;
  }

  constructor({ figmaToken, figmaUrl }) {
    this.figmaUrl = figmaUrl;
    this.figmaToken = figmaToken;

    this.fileId = FigmaIcon.formatFileIdByUrl(figmaUrl);
    this.figmaClient = this.connectFigma(figmaToken);
  }

  /**
   * 链接figma
   * @returns
   */
  connectFigma(figmaToken) {
    return Figma.Client({
      personalAccessToken: figmaToken,
    });
  }

  /**
   * 直接获取icon
   */
  runFetchIcons({ modules, formatIconName, formatIconType }) {
    return (
      this.figmaClient
        // 1. 获取文件对象
        .file(this.fileId)
        .then(({ data }) => {
          /**
           * 2. 提取icon列表
           */
          return this.collectIconNodes({
            figmaTree: data,
            modules,
            formatIconName,
            formatIconType,
          });
        })
        // 3. 获取 icon 对应的 image 链接
        .then((icons) => this.fetchIconSvgUrl(icons))
        // 4. 根据 image 链接获取 svg 内容
        .then(async (icons) => {
          return Promise.all(
            icons
              .filter((i) => i.images)
              .map((icon) => {
                return this.fetchIconSvgContent(icon.images).then((body) => {
                  icon.content = body;
                  delete icon.id;
                  delete icon.key;
                  delete icon.description;
                  delete icon.groupName;
                  delete icon.images;
                  return icon;
                });
              })
          );
        })
        .catch((error) => {
          const errorMsg = `Error fetching components from Figma: ${error}`;
          throw Error(errorMsg);
        })
    );
  }

  /**
   * 收集icon列表
   * @param {*} figmaTree
   * @returns
   */
  collectIconNodes({ figmaTree, modules, formatIconName, formatIconType }) {
    // 递归
    const pickComponentList = (node, parents = [], icons = []) => {
      if (IconComponent.is(node)) {
        icons.push(
          IconComponent.formatIconComponent({
            node,
            parents,
            data: figmaTree,
            formatIconName,
            formatIconType,
          })
        );
      } else if (node.children) {
        // 递归处理
        node.children.forEach((n) =>
          pickComponentList(n, [node, ...parents], icons)
        );
      }

      return icons;
    };

    let icons = pickComponentList(figmaTree.document);
    // 通过modules过滤图标
    if (modules && modules.length) {
      icons = icons.filter((icon) => {
        const { parentNames } = icon;
        const isInModule =
          parentNames.length === 0 ||
          !!parentNames.find((item) => modules.includes(item));
        return isInModule;
      });
    }
    // 去除parentNames
    icons = icons.map(({ parentNames, ...rest }) => rest);

    return icons;
  }

  /**
   * 获取icon的svg url
   * @returns
   */
  fetchIconSvgUrl(icons) {
    const ids = icons.map((i) => i.id);
    const fileId = this.fileId;

    return this.figmaClient
      .fileImages(fileId, {
        format: "svg",
        ids: ids,
        scale: "1",
      })
      .then(({ data }) => {
        const imagesMaps = data.images;
        icons.forEach((icon) => {
          const id = icon.id;
          if (imagesMaps[id]) {
            icon.images = imagesMaps[id];
          } else {
            console.warn(`${icon.name} icon can not fetch file Image`);
          }
        });
        return icons;
      });
  }

  /**
   * 获取具体svg内容
   * @returns
   */
  fetchIconSvgContent(svgUrl, options = {}) {
    const { format = "svg" } = options;
    const contentTypes = {
      svg: "image/svg+xml",
      png: "image/png",
      jpg: "image/jpeg",
    };
    const contentType = contentTypes[format];
    const encoding = format === "svg" ? "utf8" : null;
    return got
      .get(svgUrl, {
        headers: {
          "Content-Type": contentType,
        },
        encoding: encoding,
      })
      .then((res) => res.body);
  }
}

const getDataSource = async (options) => {
  const { modules, formatIconName, formatIconType, ...rest } = options;
  const figmaIconInstall = new FigmaIcon(rest);

  const arr = await figmaIconInstall.runFetchIcons({
    modules,
    formatIconName,
    formatIconType,
  });
  return arr;
};

module.exports = {
  getDataSource,
};
