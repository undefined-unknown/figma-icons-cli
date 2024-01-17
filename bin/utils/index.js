const Logger = require("./logger");
const PQueue = require("p-queue");
const path = require("path");

const getPath = (filePath) => {
  if (path.isAbsolute(filePath)) {
    const cwd = process.cwd();
    return path.normalize(path.join(cwd, filePath));
  }
  return filePath;
};

/**
 * 并发队列
 * @returns
 */
const queueTasks = (tasks) => {
  const queue = new PQueue(Object.assign({ concurrency: 3 }));
  for (const task of tasks) {
    queue.add(task);
  }
  queue.start();
  return queue.onIdle();
};

function hasRepeatIcon(list) {
  const listMap = {};
  const names = [];
  list.forEach((i) => {
    if (listMap[i.name]) {
      names.push(i.name);
    }
    listMap[i.name] = true;
  });
  if (names.length > 0) {
    const errMessage = `存在相同的命名 ${names}`;
    throw Error(errMessage);
  }
}

function sortIcons(icons) {
  return icons.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Convert string to camelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function toCamelCase(str) {
  return str.replace(/(^|-)([a-zA-Z])/g, (_, __, c) => c.toUpperCase());
}

const padStart = (v) => (v < 10 ? `0${v}` : v);

/**
 * 获取时间字符串
 */
const getDateStr = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = padStart(date.getMonth() + 1);
  const day = padStart(date.getDate());
  const hour = padStart(date.getHours());
  const minute = padStart(date.getMinutes());
  const second = padStart(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

const iconType = {
  CONFIGURABLE: "configurable",
  STATIC: "static",
};

/**
 * Check iconType is fixed type.
 * @param {string} iconName - A string.
 * @returns {string}
 */
function isFixedType(iconName) {
  return iconName.substring(iconName.length - 7) === `-${iconType.STATIC}`;
}

/**
 * Get iconType of icon.
 * @param {string} iconName - A string.
 * @returns {string}
 */
function getIconType(iconName) {
  return isFixedType(iconName) ? iconType.STATIC : iconType.CONFIGURABLE;
}

/**
 * Get svgContent from iconfont js file.
 * @param {string} str - A string.
 * @returns {string}
 */
function getSvgContent(str) {
  const reg = /<svg>.*?<\/svg>/gi;
  str = str.match(reg);
  return str && str.length ? str[0] : "";
}

/**
 * Get svg list from iconfont svgContent.
 * @param {string} str - A string.
 * @returns {array}
 */
function getSvgList(str) {
  const reg = /<symbol.*?<\/symbol>/gi;
  return str.match(reg);
}

/**
 * Get svg id from iconfont svg.
 * @param {string} str - A string.
 * @returns {string}
 */
function getSvgId(str) {
  const reg = /(?<=id=").*?(?=")/gi;
  str = str.match(reg);
  return str && str.length ? str[0] : "";
}

/**
 * format svg content.
 * @param {string} str - A string.
 * @returns {string}
 */
function formatIconfontSvg(str) {
  const fillReg = /fill=".+?"/gi;
  // 有些svg的path缺失fill，需要补上
  if (!fillReg.test(str)) {
    str = str.replace(/><\/path>/g, 'fill="currentColor"></path>');
  }
  str = str.replace(/symbol/gi, "svg");
  const reg = /id=".*?"/gi;
  str = str.replace(reg, 'xmlns="http://www.w3.org/2000/svg"');
  str = str.replace(/  /g, " ");
  return str;
}

const outputType = {
  SVG: "svg",
  DIFF: "diff",
  JSON: "json",
  COMPONENT: "component",
  SYMBOL: "symbol",
};

module.exports = {
  logger: new Logger("figma-icons-cli"),
  getPath,
  getDateStr,
  queueTasks,
  hasRepeatIcon,
  sortIcons,
  toCamelCase,
  iconType,
  isFixedType,
  getIconType,
  getSvgContent,
  getSvgList,
  getSvgId,
  formatIconfontSvg,
  outputType,
};
