const chalk = require("chalk");
const ora = require("ora");

class Logger {
  constructor(namespace) {
    this.namespace = namespace;
  }
  namespace;
  spinner;
  show = true;
  info(str) {
    return this.log(chalk.cyan(str));
  }
  warn(string) {
    return this.log(chalk.bold.yellow(string));
  }
  error(string) {
    return this.log(chalk.bold.red(string));
  }
  errorExit(str) {
    this.log(chalk.bold.red(str));
    process.exit(-1);
  }
  debug(str) {
    return this.log(chalk.magenta(str));
  }
  success(str) {
    return this.log(chalk.green(str));
  }
  tip(str) {
    return this.log(chalk.blueBright(str));
  }
  loading(str) {
    if (this.spinner && this.spinner.isSpinning) {
      this.spinner.stop();
    }
    this.spinner = (0, ora)(str).start();
  }
  log(string) {
    if (this.spinner && this.spinner.isSpinning) {
      this.spinner.stop();
    }
    if (this.show) {
      console.log(chalk.yellow(`[${this.namespace}]: `), string);
    }
  }
  hideLog() {
    this.show = false;
  }
  showLog() {
    this.show = true;
  }
}

module.exports = Logger;
