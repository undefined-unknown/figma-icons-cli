const { ensureDir, writeFile } = require("fs-extra");
const { join, extname, parse } = require("path");
const { logger, getPath } = require("../utils");

/**
 * 写入主文件 json
 * @param {*} icons
 * @param {*} outputDir
 * @param {*} jsonFileName
 */
const writeJsonFile = async (icons, outputDir, jsonFileName) => {
  if (!jsonFileName) {
    return;
  }
  const jsonPathInfo = parse(jsonFileName);
  const outputFileName = `${jsonPathInfo.name}.json`;
  outputDir = getPath(outputDir);
  const outputFilePath = join(outputDir, outputFileName);
  const isJsonType = extname(jsonFileName) === ".json";
  if (!isJsonType) {
    logger.error(
      `${jsonFileName} is not a json file, reset to ${outputFileName}`
    );
  }
  const iconsStr = JSON.stringify(icons, null, "\t");
  logger.info(
    `Create icons json file: ${outputFileName}, path: ${outputFilePath}`
  );
  /**
   * 写入文件
   */
  await ensureDir(join(outputDir));
  await writeFile(outputFilePath, iconsStr, "utf8");
};

module.exports = {
  writeJsonFile,
};
