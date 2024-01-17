const { remove, existsSync } = require("fs-extra");
const { join } = require("path");

const delay = (duration) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });

const root = {
  initial: "__test__/output/",
  path: "__test__/output/test",
  update(s) {
    this.path = this.initial + s;
  },
  reset() {
    this.path = this.initial + "test";
  },
};

const getTestPath = (p, r = root.path) =>
  (p && `${r}${p.startsWith("/") ? p : `/${p}`}`) || r;

const getFilePath = (p) => join(process.cwd(), getTestPath(p));

const isFileExist = (p) => existsSync(getFilePath(p));

const cleanRoot = async (r = root.path) => {
  const rootDir = join(process.cwd(), r);
  await remove(rootDir);
};

module.exports = {
  delay,
  root,
  getTestPath,
  getFilePath,
  isFileExist,
  cleanRoot,
};
