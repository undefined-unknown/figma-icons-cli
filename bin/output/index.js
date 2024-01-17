const { writeConfigFile } = require("./config");
const { writeTemplateFile } = require("./template");
const { writeJsonFile } = require("./json");
const { writeDiffFile } = require("./diff");
const { writeSvgFiles } = require("./svg");
const { writeComponentFiles } = require("./component");
const { writeSymbolFiles } = require("./symbol");

module.exports = {
  writeConfigFile,
  writeTemplateFile,
  writeJsonFile,
  writeDiffFile,
  writeSvgFiles,
  writeComponentFiles,
  writeSymbolFiles,
};
