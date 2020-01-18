export const ErrorLevels = {
  error: "error",
  warning: "warning"
};

class Error {
  constructor(name, severity) {
    this.name = name;
    this.level = severity;
  }
}

export class CycleError extends Error {
  constructor() {
    super("Cycle", ErrorLevels.error);
  }
}

export class ChainError extends Error {
  constructor() {
    super("Chain", ErrorLevels.warning);
  }
}

export class ForkError extends Error {
  constructor() {
    super("Fork", ErrorLevels.warning);
  }
}

export class DuplicateError extends Error {
  constructor() {
    super("Duplicate", ErrorLevels.warning);
  }
}
