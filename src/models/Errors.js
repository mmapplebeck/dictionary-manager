import { Record } from "immutable";

export const ErrorLevels = {
  error: "error",
  warning: "warning"
};

export const CycleError = Record({
  name: "Cycle",
  level: ErrorLevels.error
});

export const ChainError = Record({
  name: "Chain",
  level: ErrorLevels.warning
});

export const ForkError = Record({
  name: "Fork",
  level: ErrorLevels.warning
});

export const DuplicateError = Record({
  name: "Duplicate",
  level: ErrorLevels.warning
});
