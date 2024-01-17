const sourceFnMap = {
  figma: require("./figma").getDataSource,
  iconfont: require("./iconfont").getDataSource,
};

module.exports = {
  sourceFnMap,
  getDataSource: async (type, options) =>
    await (sourceFnMap[type] || sourceFnMap.figma)(options),
};
