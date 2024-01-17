const {
  ensureDir,
  writeFile,
  appendFile,
  existsSync,
  mkdirSync,
  writeFileSync,
  emptyDir,
} = require("fs-extra");
const { join } = require("path");
const { logger, getPath, toCamelCase } = require("../utils");
const { formatFn } = require("../format");

/**
 * 写入vue文件
 * @param {*} icons
 * @param {*} outputDir
 * @returns
 */
const writeComponentFiles = async ({
  icons,
  format,
  outputDir,
  iconDirName,
  outputFileName,
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
}) => {
  const fileDirPath = getPath(outputDir);
  const indexFilePath = join(fileDirPath, outputFileName || "index.js");
  const componentDirPath = join(fileDirPath, iconDirName || "components");
  // 先清空components目录
  await ensureDir(componentDirPath);
  await emptyDir(componentDirPath);
  await ensureDir(fileDirPath);

  const formatFnMap = formatFn(format);

  const appendToIndex = async ({ componentName, name }) => {
    const format = formatExportString || formatFnMap.formatExportString;
    const exportString = format({
      componentName,
      iconDirName,
      name: name,
    });
    await appendFile(indexFilePath, exportString, "utf-8");
  };

  /**
   * 写入svg单文件
   * @returns
   */
  const writeComponentFile = async ({ content, name, componentName, type }) => {
    const filePath = join(componentDirPath, `${name}.vue`);
    logger.info(`Create icon component: ${componentName}, path: ${filePath}`);

    // 格式化svg
    const svgFormat = formatSvg || formatFnMap.formatSvg;
    const svgContent = svgFormat({ content, name, className, type, svgAttr });

    // 格式化组件
    const format = formatComponent || formatFnMap.formatComponent;
    const components = format({
      componentName,
      svgContent,
      className,
      name,
      tag,
      defaultColor,
      defaultSize,
      style,
    });

    await writeFile(filePath, components, "utf8");
  };

  // generate index and d.ts file
  const generateIndex = () => {
    if (!existsSync(fileDirPath)) {
      mkdirSync(fileDirPath);
    } else if (!existsSync(componentDirPath)) {
      mkdirSync(componentDirPath);
    }

    writeFileSync(indexFilePath, "", "utf-8");
  };

  // start
  generateIndex();
  // for await of 才能保证输出顺序
  for await (const icon of icons) {
    const iconName = icon.name;
    const componentName = toCamelCase(prefix) + toCamelCase(icon.name);
    await writeComponentFile({
      type: icon.type,
      content: icon.content,
      name: iconName,
      componentName,
    });

    await appendToIndex({
      componentName: componentName,
      name: iconName,
    });
  }
  logger.info(`Create index file, path: ${indexFilePath}`);
  logger.success(`Create icon components success, total: ${icons.length}`);
};

module.exports = {
  writeComponentFiles,
};
