#!/usr/bin/env node

require = require("esm")(module /*, options*/);
const { program } = require("commander");
const inquirer = require("inquirer");
const path = require("path");
const { readJsonSync, existsSync } = require("fs-extra");
const { logger } = require("./utils");
const { writeConfigFile, writeTemplateFile } = require("./output");
const { buildIcons } = require("./build");

const package = readJsonSync(path.join(__dirname, "../package.json"));

// 配置文件类型选择列表
const configFileTypes = [{ name: "ts" }, { name: "js" }];
let promptList = [
  {
    type: "list",
    name: "type",
    message: "请选择你想要生成配置文件的类型？",
    choices: configFileTypes,
    default: configFileTypes[0],
  },
];

// 当前版本
program.version(package.version, "-v, --version", "icons-cli的最新版本");

// 初始化配置文件
program
  .command("init")
  .description("初始化配置文件")
  .action(async () => {
    writeConfigFile("ts");
  });

program
  .command("build [configFile]")
  .description("拉取图标文件")
  .action(async (configFile) => {
    logger.warn("读取配置文件");
    let cPath = configFile;
    if (!existsSync(cPath)) {
      if (existsSync("icons.config.ts")) {
        cPath = "icons.config.ts";
      } else if (existsSync("icons.config.js")) {
        cPath = "icons.config.js";
      } else {
        logger.errorExit(`配置文件不存在：${configFile}`);
      }
    }

    const configs = require(path.join(process.cwd(), cPath)).default;
    logger.success("完整配置信息：");
    console.log(JSON.stringify(configs, "", 2));

    logger.warn("开始拉取图标文件");
    const isMultiple = configs.length > 1;
    for await (config of configs) {
      if (isMultiple) {
        logger.warn("执行当前配置：");
        console.log(JSON.stringify(config, "", 2));
      }
      await buildIcons(config);
      if (isMultiple) {
        logger.success("执行当前配置成功");
      }
    }
    logger.success("拉取图标文件成功");
  });

// 模板选择列表
const templates = [{ name: "icon" }, { name: "preview" }, { name: "both" }];
let templateList = [
  {
    type: "list",
    name: "type",
    message:
      "请选择你想要的模板==>icon 集成所有图标的Icon组件模板, preview 图标预览页模板",
    choices: templates,
    default: templates[0],
  },
];

program
  .command("template [outputDir]")
  .description("根据模板，创建文件")
  .action(async (outputDir = "./") => {
    logger.warn("选择模板");
    const res = await inquirer.prompt(templateList);
    if (res.type === "icon" || res.type === "both") {
      writeTemplateFile(outputDir, "icon.vue");
    }
    if (res.type === "preview" || res.type === "both") {
      writeTemplateFile(outputDir, "preview.vue");
    }
  });

module.exports = {
  run: () => {
    // 处理命令行输入的参数
    program.parse(process.argv);
  },
};
