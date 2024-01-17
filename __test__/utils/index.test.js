const path = require("path");
const {
  hasRepeatIcon,
  getPath,
  queueTasks,
  sortIcons,
} = require("../../bin/utils/index");
const { icons } = require("../common/data");
const { delay } = require("../common");

describe("utils/hasRepeatIcon", () => {
  it("给定不重复的图标数组，函数执行正确", () => {
    let result = true;
    try {
      hasRepeatIcon(icons);
    } catch (error) {
      result = false;
    }
    expect(result).toEqual(true);
  });

  it("给定重复的图标数组，函数执行正确", () => {
    const newIcons = icons.concat([
      {
        name: "add",
      },
    ]);
    let result = true;
    try {
      hasRepeatIcon(newIcons);
    } catch (error) {
      result = false;
    }
    expect(result).toEqual(false);
  });
});

describe("utils/getPath", () => {
  const relativePath = "src/test";
  const absolutePath = "/src/test";

  it("给定相对路径，函数执行正确", () => {
    const result = getPath(relativePath);

    expect(result).toEqual(relativePath);
  });

  it("给定绝对路径，函数执行正确", () => {
    const result = getPath(absolutePath);

    expect(result).not.toEqual(absolutePath);
    expect(result).toContain(absolutePath);
  });

  it("给定同目录的相对路径与绝对路径，两者匹配正确", () => {
    const result1 = getPath(relativePath);
    const result2 = getPath(absolutePath);

    expect(path.join(process.cwd(), result1)).toEqual(result2);
  });
});

describe("utils/queueTasks", () => {
  const mock = jest.fn(async () => await delay(1000));

  it("给定定时函数，函数执行时间应小于所有时间之和", async () => {
    const tasks = Array(7).fill(mock);
    const startTime = new Date().getTime();
    queueTasks(tasks);
    const endTime = new Date().getTime();
    expect(endTime - startTime).toBeLessThan(1000);
    expect(mock).toHaveBeenCalledTimes(3);
    await delay(1200);
    expect(mock).toHaveBeenCalledTimes(6);
    await delay(1000);
    expect(mock).toHaveBeenCalledTimes(tasks.length);
  });
});

const random = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

describe("utils/sortIcons", () => {
  it("给定乱序图标数组，函数执行正确", () => {
    const randomList = random(icons);
    const result = sortIcons(randomList);

    expect(result).toEqual(icons);
  });
});
