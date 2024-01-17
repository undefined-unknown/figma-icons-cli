const { logger, hasRepeatIcon, sortIcons, outputType } = require("./utils");
const {
  writeJsonFile,
  writeDiffFile,
  writeSvgFiles,
  writeComponentFiles,
  writeSymbolFiles,
} = require("./output");
const { getDataSource } = require("./source");
const defaultConfig = require("./config");

const checkInput = (inputs) => {
  if (!inputs || inputs.length === 0) {
    logger.errorExit("input cannot be empty!");
  }

  inputs.forEach((input) => {
    if (!inputs) {
      logger.errorExit("input cannot be empty!");
    }
    const { type, url, token } = input;
    if (type === "figma") {
      if (!url) {
        logger.errorExit("Cannot find figma url in process!");
      }
      if (!token) {
        logger.errorExit("Cannot find figma token in process!");
      }
    } else if (type === "iconfont") {
      if (!url) {
        logger.errorExit("Cannot find iconfont url in process!");
      }
    } else {
      logger.errorExit(`not support type: ${type}`);
    }
  });
};

const getIcons = async (input) => {
  const {
    type,
    url,
    token,
    prefix,
    modules,
    filter,
    formatIconName,
    formatIconType,
  } = input;
  const icons = await getDataSource(
    type,
    type === "figma"
      ? {
          figmaToken: token,
          figmaUrl: url,
          modules,
          formatIconName,
          formatIconType,
        }
      : {
          iconfontUrl: url,
          formatIconName,
          formatIconType,
        }
  ).then((icons) => {
    // 按字母顺序排序，避免合并冲突
    icons = sortIcons(icons);
    // 对图标进行过滤
    if (filter) {
      icons = icons.filter(filter);
    }
    // 验证是否有重复
    hasRepeatIcon(icons);
    // 给图标增加前缀
    if (prefix) {
      icons = icons.map((icon) => ({
        ...icon,
        name: `${prefix}${prefix && prefix.indexOf("-") === -1 ? "-" : ""}${
          icon.name
        }`,
      }));
    }

    return icons;
  });

  return icons;
};

/**
 * output icons
 * @param {*} outputs
 * @param {*} icons
 */
const outputIcons = async (outputs, icons) => {
  let jsonFileDir, jsonFileName;

  outputs.forEach((output) => {
    const { type, dir, filename } = output;
    if (type === outputType.JSON) {
      jsonFileDir = dir || defaultConfig.jsonFileDir;
      jsonFileName = filename || defaultConfig.jsonFileName;
    }
  });

  const sort = [
    outputType.DIFF,
    outputType.JSON,
    outputType.SVG,
    outputType.COMPONENT,
    outputType.SYMBOL,
  ];

  outputs = outputs.sort((a, b) => sort.indexOf(a.type) - sort.indexOf(b.type));

  for await (const output of outputs) {
    const { type, dir, filename } = output;
    let action;
    switch (type) {
      case outputType.DIFF:
        action = async () => {
          logger.warn("开始写入diff文件");
          if (!jsonFileDir && !jsonFileName) {
            logger.error("未找到json文件，写入diff文件!");
          } else {
            await writeDiffFile({
              icons,
              diffFileDir: dir || defaultConfig.diffFileDir,
              jsonFileDir,
              jsonFileName,
            });
          }
        };
        break;
      case outputType.JSON:
        action = async () => {
          logger.warn("开始写入json文件");
          await writeJsonFile(
            icons,
            dir || defaultConfig.jsonFileDir,
            filename || defaultConfig.jsonFileName
          );
        };
        break;
      case outputType.SVG:
        action = async () => {
          logger.warn("开始写入svg文件");
          await writeSvgFiles(icons, dir || defaultConfig.svgFileDir);
        };
        break;
      case outputType.COMPONENT:
        action = async () => {
          logger.warn("开始写入图标组件");
          const {
            format,
            dirname,
            prefix,
            className,
            tag,
            defaultColor,
            defaultSize,
            svgAttr,
            style,
            formatSvg,
            formatComponent,
            formatExportString,
          } = output;
          await writeComponentFiles({
            icons,
            format: format || defaultConfig.componentFormat,
            outputDir: dir || defaultConfig.componentDir,
            iconDirName: dirname || defaultConfig.componentDirname,
            outputFileName: filename || defaultConfig.componentFilename,
            className: className || defaultConfig.className,
            prefix:
              typeof prefix !== "undefined" ? prefix : defaultConfig.prefix,
            tag,
            defaultColor,
            defaultSize,
            svgAttr,
            style,
            formatSvg,
            formatComponent,
            formatExportString,
          });
        };
        break;
      case outputType.SYMBOL:
        action = async () => {
          logger.warn("开始输出symbol类型的文件");
          const { className, style } = output;
          await writeSymbolFiles({
            icons,
            outputDir: dir || defaultConfig.componentDir,
            className: className || defaultConfig.className,
            style,
          });
        };
        break;

      default:
        action = async () => {};
        break;
    }

    await action();
  }
};

/**
 * build icons
 * @param {*} config
 */
const buildIcons = async (config) => {
  let { input: inputs, output: outputs } = config;
  checkInput(inputs);
  if (!outputs || outputs.length === 0) {
    logger.errorExit("output cannot be empty!");
  }

  let icons = [];
  for await (const input of inputs) {
    const arr = await getIcons(input);
    icons = icons.concat(arr);
  }

  // 验证是否有重复
  hasRepeatIcon(icons);
  // 按字母顺序排序，避免合并冲突
  icons = sortIcons(icons);

  outputIcons(outputs, icons);
};

module.exports = {
  buildIcons,
  outputIcons,
};
