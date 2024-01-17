const { root, getTestPath, isFileExist, cleanRoot } = require("../common");
const { outputIcons } = require("../../bin/build");
const { logger, outputType: OutputType } = require("../../bin/utils");
const { icons } = require("../common/data");

jest.setTimeout(10000);

describe("output/json", () => {
  beforeAll(() => {
    root.update("json");
    logger.hideLog();
  });

  afterEach(async () => {
    await cleanRoot();
  });

  afterAll(async () => {
    logger.showLog();
  });

  it("给定dir，输出正确", async () => {
    const config = [
      {
        type: OutputType.JSON,
        dir: getTestPath(),
      },
    ];

    await outputIcons(config, icons);

    expect(isFileExist("icons.json")).toEqual(true);
  });

  it("变更dir，输出正确", async () => {
    const config = [
      {
        type: OutputType.JSON,
        dir: getTestPath("main"),
      },
    ];

    await outputIcons(config, icons);

    expect(isFileExist("icons.json")).toEqual(false);
    expect(isFileExist("main/icons.json")).toEqual(true);
  });

  it("给定正确filename，输出正确", async () => {
    const config = [
      {
        type: OutputType.JSON,
        dir: getTestPath(),
        filename: "icons2.json",
      },
    ];

    await outputIcons(config, icons);

    expect(isFileExist("icons.json")).toEqual(false);
    expect(isFileExist("icons2.json")).toEqual(true);
  });

  it("给定错误filename，输出正确", async () => {
    const config = [
      {
        type: OutputType.JSON,
        dir: getTestPath(),
        filename: "icons2.js",
      },
    ];

    await outputIcons(config, icons);

    expect(isFileExist("icons.json")).toEqual(false);
    expect(isFileExist("icons2.js")).toEqual(false);
    expect(isFileExist("icons2.json")).toEqual(true);
  });
});
