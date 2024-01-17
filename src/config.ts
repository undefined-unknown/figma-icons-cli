export enum FormatType {
  VUE = "vue",
  IMG = "img",
  BG = "bg",
}

export enum IconType {
  CONFIGURABLE = "configurable",
  STATIC = "static",
}

export enum InputType {
  FIGMA = "figma",
  ICONFONT = "iconfont",
}

export interface Icon {
  name: string;
  type: IconType;
  content: string;
}

export interface FigmaInputOption {
  type: InputType.FIGMA;
  url: string;
  token: string;
  prefix?: string;
  modules?: string[];
  filter?: (icon: Icon, index: number, array: Array<Icon>) => boolean;
  formatIconName?: (name: string) => string;
  formatIconType?: (name: string) => IconType;
}

export interface IconfontInputOption {
  type: InputType.ICONFONT;
  url: string;
  prefix?: string;
  filter?: (icon: Icon, index: number, array: Array<Icon>) => boolean;
  formatIconName?: (name: string) => string;
  formatIconType?: (name: string) => IconType;
}

export type InputOption = FigmaInputOption | IconfontInputOption;

export enum OutputType {
  SVG = "svg",
  DIFF = "diff",
  JSON = "json",
  COMPONENT = "component",
  SYMBOL = "symbol",
}

export interface SvgFormatOptions {
  content: string;
  name: string;
  className: string;
  type: IconType;
  svgAttr?: string;
}

export interface ComponentFormatOptions {
  svgContent: string;
  componentName: string;
  className: string;
  name?: string;
  tag?: string;
  defaultColor?: string;
  defaultSize?: string | number;
  style?: string;
}

export interface ExportStringFormatOptions {
  name: string;
  componentName: string;
  iconDirName: string;
}

export interface ComponentOutputOption {
  type: OutputType.COMPONENT;
  format?: FormatType;
  dir?: string;
  dirname?: string;
  filename?: string;
  prefix?: string;
  className?: string;
  tag?: string;
  defaultColor?: string;
  defaultSize?: string | number;
  svgAttr?: string;
  style?: string;
  formatSvg?: (options: SvgFormatOptions) => string;
  formatComponent?: (options: ComponentFormatOptions) => string;
  formatExportString?: (options: ExportStringFormatOptions) => string;
}

export interface JsonOutputOption {
  type: OutputType.JSON;
  dir?: string;
  filename?: string;
}

export interface SymbolOutputOption {
  type: OutputType.SYMBOL;
  dir?: string;
  className?: string;
  style?: string;
}

export interface CommonOutputOption {
  type: OutputType;
  dir?: string;
}

export type OutputOption =
  | CommonOutputOption
  | ComponentOutputOption
  | JsonOutputOption
  | SymbolOutputOption;

export interface IconConfig {
  input: InputOption | InputOption[];
  output: OutputOption | OutputOption[];
}

function formatOptions<T>(options: T | T[]) {
  if (!Array.isArray(options)) {
    options = [options];
  }

  return options;
}

export function defineIconConfig(
  options: IconConfig | IconConfig[]
): IconConfig[] {
  if (!Array.isArray(options)) {
    options = [options];
  }

  const config: IconConfig[] = options.map((option: IconConfig) => {
    return Object.assign(
      {},
      {
        input: formatOptions<InputOption>(option.input),
        output: formatOptions<OutputOption>(option.output),
      }
    );
  });

  return config;
}
