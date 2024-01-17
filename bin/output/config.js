const { readFile, writeFile, existsSync } = require("fs-extra");
const { join } = require("path");
const { logger } = require("../utils");

/**
 * 写入配置文件
 * @param {*} type
 */
const writeConfigFile = async (type) => {
  const outputFile = `./icons.config.${type}`;
  if (existsSync(outputFile)) {
    logger.errorExit(`初始化失败，配置文件icons.config.${type}已存在`);
  }
  const configFile = await readFile(
    join(__dirname, "../../templates/icons.config.ts"),
    "utf8"
  );
  writeFile(`./icons.config.${type}`, configFile, function (err) {
    if (err) {
      logger.errorExit("创建配置文件失败：", err);
    } else {
      logger.success("创建配置文件成功！");
    }
  });
};

module.exports = {
  writeConfigFile,
};
