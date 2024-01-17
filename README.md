# figma-icons-cli

A command-line interface for managing icons. 管理图标组件的命令行工具。
可同时拉取 iconfont/figma 图标到本地，生成组件。

## 特性

- ⚙️ 配置灵活，同一项目内可配多个不同配置，根据需求灵活使用
- 📠 可单独拉取 iconfont 或 figma 的图标，也可两者同时拉取
- 🎯 多种输出类型可选，且可任意配置
- 🌈 可自定义组件格式化方式
- 🚀 可设置过滤函数，过滤不需要的图标
- 🔄 提供前后图标数据差异对比，方便跟踪变化
- 🤖 提供图标集成组件模板、预览页模板

## 安装依赖

```bash
npm install -D figma-icons-cli
yarn add -D figma-icons-cli
```

## 使用

### 初始化配置文件

```bash
icons init
```

在当前目录生成 icons.config.ts 配置文件。具体配置详见下方[配置参数说明](#配置参数说明)  
参考：[配置文件模板](./templates/icons.config.ts)
注：配置参数可传入对象或者数组。

### 拉取图标

```bash
# configFile: 可传入配置文件，不传则默认取当前根目录下的icons.config.ts 配置文件
icons build [configFile]
```

### 使用图标

输出的 type=component 时

```vue
<template>
  <div>
    <IconArrowLeft style="font-size: 50px; color: red" />
    <icon-more style="font-size: 50px; color: red" />

    <!-- format=bg|img时 -->
    <IconArrowLeft size="50px" color="#2254f4" />
  </div>
</template>

<script lang="ts">
import { IconArrowLeft, IconMore } from "@/icons";

export default {
  components: {
    IconArrowLeft,
    IconMore,
  },
};
</script>
```

输出的 type=symbol 时

```js
// 入口文件main.js
import { createApp } from "vue";
import App from "./App.vue";
import "./svg-icon/svg-icon"; // 输出的svg-icon.js文件
import SvgIcon from "./svg-icon/svg-icon.vue"; // 输出的svg-icon.vue文件

const app = createApp(App);
app.component(SvgIcon.name, SvgIcon); // 全局注册图标组件
app.mount("#app");
```

```vue
<template>
  <div>
    <svg-icon name="success-static" style="font-size: 50px; color: #2254f4" />
    <svg-icon name="error-fill" :style="{ fontSize: 50, color: '#2254f4' }" />
    <svg-icon name="edit" :style="{ fontSize: 50, color: '#2254f4' }" />
    <svg-icon name="add" :style="{ fontSize: 50, color: '#2254f4' }" />
  </div>
</template>
```

### 创建模板文件

如需要`<Icon name=""/>`这种方式的集成所有图标的组件，可创建相应模板，进行自定义；同时提供了图标预览页模板。

```bash
# 根据模板，创建文件。执行后可选：icon 集成所有图标的Icon组件模板, preview 图标预览页模板, both 同时创建两种模板文件
# outputDir: 输出文件目录，不传则默认取当前根目录
icons template [outputDir]
```

## 配置参数说明

| 参数名 | 描述     | 是否必填 | 类型                          | 默认值 |
| ------ | -------- | -------- | ----------------------------- | ------ |
| input  | 输入配置 | 是       | InputOption \| InputOption[]  | 无     |
| output | 输出配置 | 是       | OutputOption \|OutputOption[] | 无     |

### InputOption

| 参数名         | 描述                                                     | 是否必填 | 类型                                                              |
| -------------- | -------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| type           | 源数据类型                                               | 是       | 'figma' \| 'iconfont'                                             |
| url            | figma 文档链接或 iconfont js 链接                        | 是       | string                                                            |
| token          | type=figma 时需要, figma api 需要的 token                | 否       | string                                                            |
| prefix         | 图标名前缀，用来避免不同数据源有同名的图标               | 否       | string                                                            |
| modules        | type=figma 时可选, 自定义选择 figma 模块内的图标进行输出 | 否       | string[]                                                          |
| filter         | 过滤函数                                                 | 否       | (icon: Icon, index: number, array: Array&lt;Icon&gt;) => boolean; |
| formatIconName | 自定义修改图标名称                                       | 否       | (name:string) => string;                                          |
| formatIconType | 自定义图标类型，static 固定色、configurable 可变色       | 否       | (name:string) => 'configurable'\|'static';                        |

### OutputOption

| 参数名             | 描述                                                     | 是否必填 | 类型                                                 | 默认值                                 |
| ------------------ | -------------------------------------------------------- | -------- | ---------------------------------------------------- | -------------------------------------- |
| type               | 输出类型                                                 | 是       | 'diff' \| 'svg' \| 'json' \| 'component' \| 'symbol' | ''                                     |
| format             | type=component 时生效，选择预置的格式化方式              | 是       | 'vue' \| 'img' \| 'bg'                               | ''                                     |
| dir                | 输出目录                                                 | 否       | string                                               | 'src'                                  |
| dirname            | type=component 时生效，输出图标组件存放目录名            | 否       | number                                               | 'components'                           |
| filename           | type=component 时生效，输出图标组件的入口文件名          | 否       | boolean                                              | 'index.js'                             |
| tag                | format=bg 时生效，自定义组件的标签                       | 否       | string                                               | 'src'                                  |
| defaultColor       | format=img \| bg 时生效，图标组件默认颜色值              | 否       | string                                               | ''                                     |
| defaultSize        | format=img \| bg 时生效，图标组件默认大小                | 否       | string \| number                                     | 20                                     |
| prefix             | 生成图标组件的前缀，如 arrow -> IconArrow                | 否       | string                                               | 'icon'                                 |
| className          | 图标组件上的 class 名，如 arrow -> 'icons icons-arrow' | 否       | string                                               | 'icons'                               |
| svgAttr            | format=vue 时生效，自定义组件 svg 标签的属性             | 否       | string                                               | 'aria-hidden="true" v-on="$listeners"' |
| style              | type=symbol/component 时生效，自定义组件的 style         | 否       | string                                               | ''                                     |
| formatSvg          | type=component 时生效，自定义格式化 svg 的函数           | 否       | (options: SvgFormatOptions) => string                | 无                                     |
| formatComponent    | type=component 时生效，自定义格式化组件的函数            | 否       | (options: ComponentFormatOptions) => string          | 无                                     |
| formatExportString | type=component 时生效，自定义格式化导出组件的字符串      | 否       | (options: ExportStringFormatOptions) => string       | 无                                     |

#### type 参数说明

| 值          | 描述                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `diff`      | 输出前后图标数据差异对比                                              |
| `svg`       | 输出所有图标 svg 文件                                                 |
| `json`      | 集合所有图标数据的 json 文件，如需输出 diff 文件，json 文件也必须输出 |
| `component` | 输出图标组件                                                          |
| `symbol`    | 输出类似 iconfont symbol 方式的文件                                   |

#### format 参数说明

| 值    | 框架 | 标签               | 描述                                                        | 常用场景                                                  |
| ----- | ---- | ------------------ | ----------------------------------------------------------- | --------------------------------------------------------- |
| `vue` | vue  | svg                | 正常的 svg 标签组件                                         |                                                           |
| `img` | vue  | img                | 图标转化为 base64 输出到 img 标签的 src 参数中              |                                                           |
| `bg`  | vue  | 自定义，默认'span' | 图标转化为 base64 输出到标签 style 中的 background-image 中 | 微信小程序下不支持 svg 标签，可使用 text 标签输出图标组件 |

注：微信小程序使用`bg`的方式，因转化 base64 时使用到了 btoa 函数，但小程序环境下并没有该函数，故此需在全局提前注入 btoa 函数，此处提供一个 btoa 函数供参考：[btoa](./templates/btoa.js)

### SvgFormatOptions

| 参数名    | 描述               | 类型                               |
| --------- | ------------------ | ---------------------------------- |
| content   | 图标 svg 的字符串  | string                             |
| name      | 图标的名称         | string                             |
| className | 输出图标组件的类名 | string                             |
| type      | 图标的类型         | string<"configurable" \| "static"> |
| svgAttr   | svg 标签的属性     | string                             |

### ComponentFormatOptions

| 参数名        | 描述                               | 类型             |
| ------------- | ---------------------------------- | ---------------- |
| svgContent    | formatSvg 返回的 svg 字符串        | string           |
| componentName | 输出成图标组件的组件名             | string           |
| className     | 输出图标组件的类名                 | string           |
| name          | 图标名                             | string           |
| tag           | format=bg 时生效，自定义组件的标签 | string           |
| defaultColor  | 图标组件默认颜色值                 | string           |
| defaultSize   | 图标组件默认大小                   | string \| number |
| style         | 自定义图标组件样式                 | string           |

### ExportStringFormatOptions

| 参数名        | 描述                 | 类型   |
| ------------- | -------------------- | ------ |
| componentName | 图标组件的组件名     | string |
| iconDirName   | 图标组件输出的目录名 | string |
| name          | 图标组件的文件名     | string |
