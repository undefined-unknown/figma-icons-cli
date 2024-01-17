const { root, getTestPath, isFileExist, cleanRoot } = require("../common");
const { outputIcons } = require("../../bin/build");
const { logger, outputType: OutputType } = require("../../bin/utils");
const { icons } = require("../common/data");

const isComponentFileExist = () =>
  isFileExist("icons/index.js") && isFileExist("icons/components/add.vue");
const isDiffFileExist = () => isFileExist("diff/");
const isSvgFileExist = () => isFileExist("svg/add.svg");
const isSymbolFileExist = () =>
  isFileExist("svg-icon/svg-icon.vue") && isFileExist("svg-icon/svg-icon.js");
const isJsonFileExist = () => isFileExist("icons.json");

jest.setTimeout(10000);

describe("output/check output type", () => {
  beforeAll(() => {
    root.reset();
    logger.hideLog();
  });

  afterEach(async () => {
    await cleanRoot();
  });

  afterAll(() => logger.showLog());

  const config = [
    {
      type: OutputType.COMPONENT,
      dir: getTestPath("icons"),
    },
    {
      type: OutputType.SYMBOL,
      dir: getTestPath("svg-icon"),
    },
    {
      type: OutputType.DIFF,
      dir: getTestPath("diff"),
    },
    {
      type: OutputType.JSON,
      dir: getTestPath(),
    },
    {
      type: OutputType.SVG,
      dir: getTestPath("svg"),
    },
  ];

  it("给定全部输出类型，输出正确", async () => {
    const c = config.concat([]);

    await outputIcons(c, icons);

    expect(isComponentFileExist()).toEqual(true);
    expect(isDiffFileExist()).toEqual(true);
    expect(isSvgFileExist()).toEqual(true);
    expect(isSymbolFileExist()).toEqual(true);
    expect(isJsonFileExist()).toEqual(true);
  });

  const actionMap = {
    SVG: (v) => expect(isSvgFileExist()).toEqual(v),
    DIFF: (v) => expect(isDiffFileExist()).toEqual(v),
    JSON: (v) => expect(isJsonFileExist()).toEqual(v),
    COMPONENT: (v) => expect(isComponentFileExist()).toEqual(v),
    SYMBOL: (v) => expect(isSymbolFileExist()).toEqual(v),
  };

  const testSome = async (arr = []) => {
    const keys = Object.keys(OutputType);
    arr.forEach((ele) => {
      const key = ele.type.toUpperCase();
      if (keys.includes(key)) {
        actionMap[key] && actionMap[key](true);
        keys.splice(keys.indexOf(key), 1);
      }
    });
    keys.forEach((key) => {
      actionMap[key] && actionMap[key](false);
    });
  };

  it("给定任意一种输出类型，输出正确", async () => {
    for await (const item of config) {
      let c = [item];
      if (item.type === OutputType.DIFF) {
        c = [item, config[3]];
      }
      await cleanRoot();
      await outputIcons(c, icons);

      await testSome(c);
    }
  });
});
