const { ensureDir, writeFile, emptyDir } = require("fs-extra");
const { join } = require("path");
const { logger, getPath, queueTasks } = require("../utils");

/**
 * 写入svg文件
 * @param {*} icons
 * @param {*} outputDir
 * @returns
 */
const writeSvgFiles = async (icons, outputDir) => {
  if (!outputDir) {
    return;
  }
  const fileDirPath = getPath(outputDir);
  // 先清空目录
  await ensureDir(fileDirPath);
  await emptyDir(fileDirPath);

  /**
   * 写入svg单文件
   * @returns
   */
  const writeSvgFile = (body, name) => {
    const filePath = join(fileDirPath, `${name}.svg`);
    logger.info(`Create svg file: ${name}.svg, path: ${filePath}`);

    writeFile(filePath, body, "utf8");
  };

  /**
   * 并发请求控制
   */
  return queueTasks(
    icons.map((icon) => () => writeSvgFile(icon.content, icon.name))
  );
};

module.exports = {
  writeSvgFiles,
};
