const { ensureDir, writeFile, existsSync } = require("fs-extra");
const { join } = require("path");
const { logger, getPath } = require("../utils");
const {
  formatSvg,
  formatComponent,
  formatOutput,
} = require("../format/symbol");

/**
 * 写入vue文件
 * @param {*} icons
 * @param {*} outputDir
 * @returns
 */
const writeSymbolFiles = async ({ icons, outputDir, className, style }) => {
  const fileDirPath = getPath(outputDir);

  await ensureDir(fileDirPath).then(async () => {
    const svgContent = icons
      .map((icon) => {
        return formatSvg(icon);
      })
      .join("");

    const outputContent = formatOutput({ svgContent, className, style });

    await writeFile(join(fileDirPath, "svg-icon.js"), outputContent, "utf8");

    logger.info(
      `Create file svg-icon.js success, path: ${fileDirPath}/svg-icon.js`
    );

    const iconFile = join(fileDirPath, "svg-icon.vue");

    if (existsSync(iconFile)) {
      logger.success(`file svg-icon.vue already exists, skip creation`);
      return;
    }

    await writeFile(iconFile, formatComponent({ className }), "utf8");

    logger.success(
      `Create file svg-icon.vue success, total: ${icons.length}/svg-icon.vue`
    );
  });
};

module.exports = {
  writeSymbolFiles,
};
