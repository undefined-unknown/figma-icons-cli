const formatFnMap = {
  vue: require("./vue"),
  img: require("./img"),
  bg: require("./bg"),
};

module.exports = {
  formatFnMap,
  formatFn: (type) => formatFnMap[type] || formatFnMap.vue,
};
