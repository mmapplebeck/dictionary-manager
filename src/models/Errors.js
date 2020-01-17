export const ErrorLevels = {
  error: "error",
  warning: "warning"
};

export default class Error {
  constructor(name, severity) {
    this.name = name;
    this.level = severity;
  }
}
