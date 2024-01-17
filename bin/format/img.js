const { iconType } = require("../utils");

/**
 * 格式化svg内容
 * @param {Object} params
 * @returns {string}
 */
const formatSvg = ({ content, name, className, type }) => {
  // 判断是否固定色
  const isStatic = type === iconType.STATIC;

  content = content.replace(/\n|\t/gi, "");
  if (!isStatic) {
    // 固定色跳过颜色替换的逻辑
    content = content.replace(/fill="none"/gi, "fill-none");
    content = content.replace(/fill="(#FFFFFF|white)"/gi, "white-color");
    content = content.replace(/fill=".+?"/gi, "fill='${this.color}'");
    content = content.replace(/stroke=".+?"/gi, "stroke='${this.color}'");
    content = content.replace(/white-color/gi, "fill='white'");
    content = content.replace(/fill-none/gi, "fill='none'");
  }

  return content;
};

const formatComponent = ({
  svgContent,
  componentName,
  className,
  name,
  defaultColor = "",
  defaultSize = 20,
  style,
}) =>
  `<template>
    <img class="${className} ${className}-${name}" :src="image" :style="{ fontSize }" />
</template>
<script>
export default {
    name: '${componentName}',
    props: {
        color: {
            type: String,
            default: '${defaultColor}',
        },
        size: {
            type: [Number, String],
            default: ${defaultSize},
        },
    },
    computed: {
        image() {
            return \`data:image/svg+xml;base64,\${btoa(\`${svgContent}\`)}\`;
        },
        fontSize() {
            return typeof this.size === 'number' ? this.size + 'px' : this.size;
        },
    },
};
</script>
<style>
.${className} {
  ${
    style ||
    `display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;`
  }
}
</style>
`;

const formatExportString = ({ componentName, iconDirName, name }) =>
  `export { default as ${componentName} } from './${
    iconDirName || "components"
  }/${name}.vue';\r\n`;

module.exports = {
  formatSvg,
  formatComponent,
  formatExportString,
};
