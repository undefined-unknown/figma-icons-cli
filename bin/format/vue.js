const { iconType } = require("../utils");

/**
 * 格式化svg内容
 * @param {Object} params
 * @returns {string}
 */
const formatSvg = ({ content, name, className, type, svgAttr }) => {
  // 判断是否固定色
  const isStatic = type === iconType.STATIC;
  // 固定色跳过颜色替换的逻辑
  if (!isStatic) {
    // 把白色跟none先替换成临时值
    content = content.replace(/fill="none"/gi, "fill-none");
    content = content.replace(/fill="(#FFFFFF|white)"/gi, "white-color");

    // 替换颜色
    content = content.replace(/fill=".+?"/gi, 'fill="currentColor"');
    content = content.replace(/stroke=".+?"/gi, 'stroke="currentColor"');

    // 把白色跟none替换回来
    content = content.replace(/white-color/gi, 'fill="white"');
    content = content.replace(/fill-none/gi, 'fill="none"');
  }

  content = content.replace(
    /<svg/gi,
    `<svg class="${className || "gdesign-icon"} ${
      className || "gdesign-icon"
    }-${name}" ${svgAttr || 'aria-hidden="true" v-on="$listeners"'}`
  );
  return content;
};

const formatComponent = ({ svgContent, componentName, className, style }) =>
  `<template>
    ${svgContent}
</template>
<script>
export default {
    name: '${componentName}',
};
</script>
<style>
.${className || "gdesign-icon"} {
  ${
    style ||
    `width: 1em;
  height: 1em;
  overflow: hidden;
  font-size: 20px;
  vertical-align: -0.15em;`
  } 
}
</style>`;

const formatExportString = ({ componentName, iconDirName, name }) =>
  `export { default as ${componentName} } from './${
    iconDirName || "components"
  }/${name}.vue';\r\n`;

module.exports = {
  formatSvg,
  formatComponent,
  formatExportString,
};
