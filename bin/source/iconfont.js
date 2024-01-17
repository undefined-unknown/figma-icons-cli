const fetch = require("node-fetch");
const {
  logger,
  getSvgContent,
  getSvgList,
  getSvgId,
  formatIconfontSvg,
  getIconType,
} = require("../utils");

const getDataSource = async ({
  iconfontUrl,
  formatIconName,
  formatIconType,
}) => {
  if (!iconfontUrl.startsWith("https:")) {
    iconfontUrl = `https:${iconfontUrl}`;
  }
  const response = await fetch(iconfontUrl);

  const body = await response.text();

  const svgContent = getSvgContent(body);

  let svgList = getSvgList(svgContent);

  svgList = svgList.map((svg) => {
    let name = getSvgId(svg);
    name = name.toLowerCase().replace(/_/g, "-");
    if (formatIconName) {
      name = formatIconName(name);
    }
    const type = formatIconType ? formatIconType(name) : getIconType(name);
    logger.info(`Find iconfont icon: ${name}，type: ${type}`);

    return {
      name,
      content: formatIconfontSvg(svg),
      type,
    };
  });

  return svgList;
};

module.exports = {
  getDataSource,
};
