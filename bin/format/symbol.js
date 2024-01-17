const { iconType } = require("../utils");

/**
 * 格式化svg内容
 * @param {Object} params
 * @returns {string}
 */
const formatSvg = ({ content, name, type }) => {
  // 判断是否固定色
  const isStatic = type === iconType.STATIC;

  content = content.replace(/\n|\t/gi, "");

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

  // 去除无用属性
  content = content.replace(/(width|height|fill-rule|clip-rule)=".+?" /gi, "");

  // 替换成symbol
  content = content.replace(/<svg/gi, `<symbol id="${name}"`);
  content = content.replace(/<\/svg>/gi, "</symbol>");
  return content;
};

const formatOutput = ({ svgContent, className, style }) => {
  const key = className.replace(/-/gi, "_");
  return `!function(t){var e,o,i,l,n,a='<svg>${svgContent}</svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),d=function(t,e){e.parentNode.insertBefore(t,e)};if(!t.__${key}__svg__cssinject__){t.__${key}__svg__cssinject__=!0;try{var style = document.createElement("style");const ct=".${className}{${
    style ||
    "display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;"
  }}";try{style.appendChild(document.createTextNode(ct));} catch (ex) {style.styleSheet.cssText = ct;}var head = document.getElementsByTagName("head")[0];head.appendChild(style);}catch(t){console&&console.log(t)}}function s(){n||(n=!0,i())}function h(){try{l.documentElement.doScroll("left")}catch(t){return void setTimeout(h,50)}s()}e=function(){var t,e=document.createElement("div");e.innerHTML=a,a=null,(e=e.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",e=e,(t=document.body).firstChild?d(e,t.firstChild):t.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(e,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),e()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(i=e,l=t.document,n=!1,h(),l.onreadystatechange=function(){"complete"==l.readyState&&(l.onreadystatechange=null,s())})}(window);`;
};

// const formatOutput = ({ svgContent, className }) => {
//   const key = className.replace(/-/gi, "_");
//   return `!function(t){var e,o,i,l,n,a='<svg>${svgContent}</svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),d=function(t,e){e.parentNode.insertBefore(t,e)};if(c&&!t.__${key}__svg__cssinject__){t.__${key}__svg__cssinject__=!0;try{document.write("<style>.${className} {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}function s(){n||(n=!0,i())}function h(){try{l.documentElement.doScroll("left")}catch(t){return void setTimeout(h,50)}s()}e=function(){var t,e=document.createElement("div");e.innerHTML=a,a=null,(e=e.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",e=e,(t=document.body).firstChild?d(e,t.firstChild):t.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(e,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),e()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(i=e,l=t.document,n=!1,h(),l.onreadystatechange=function(){"complete"==l.readyState&&(l.onreadystatechange=null,s())})}(window);`;
// };

const formatComponent = ({ className }) =>
  `<template>
  <svg :class="['${className}', \`${className}-\${name}\`]">
    <use :xlink:href="\`#\${name}\`" />
  </svg>
</template>
<script>
export default {
  name: "svg-icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>`;

module.exports = {
  formatSvg,
  formatComponent,
  formatOutput,
};
