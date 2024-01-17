const { ensureDir, readFile, writeFile, existsSync } = require("fs-extra");
const { join } = require("path");
const { logger, getPath } = require("../utils");

/**
 * 写入模板文件
 * @param {*} outputDir
 * @param {*} file
 */
const writeTemplateFile = async (outputDir, file) => {
  outputDir = getPath(outputDir);
  const outputFile = join(outputDir, file);
  if (existsSync(outputFile)) {
    logger.errorExit(`操作失败，模板文件${outputFile}已存在`);
  }
  const templateFile = await readFile(
    join(__dirname, `../../templates/${file}`),
    "utf8"
  );
  ensureDir(outputDir).then(() => {
    writeFile(outputFile, templateFile, function (err) {
      if (err) {
        logger.errorExit("创建模板文件失败：", err);
      } else {
        logger.success("创建模板文件成功！");
      }
    });
  });
};

module.exports = {
  writeTemplateFile,
};
