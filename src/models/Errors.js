import { Record } from "immutable";

export const ErrorNames = {
  cycle: "Cycle",
  chain: "Chain",
  fork: "Fork",
  duplicate: "Duplicate"
};
export const ErrorLevels = {
  error: "error",
  warning: "warning"
};

export const Error = Record({
  name: "",
  level: ""
});
