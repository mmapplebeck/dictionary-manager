// Necessary to maintain spy reference in unit tests
// https://stackoverflow.com/questions/45111198/how-to-mock-functions-in-the-same-module-using-jest
import * as thisModule from "./validateDictionaryItems";

import {
  ErrorLevels,
  CycleError,
  ChainError,
  ForkError,
  DuplicateError
} from "./models/Errors";

export const validateItem = (item, domains, rangesByDomain) => {
  // Check for errors in order of my percieved severity
  let error = null;
  // If this item's range is also an existing domain, it must be either a cycle or a chain
  if (domains.has(item.range)) {
    // If a domain exists that maps to this item's domain, there is a cycle, otherwise it must be a chain
    if (rangesByDomain[item.range].includes(item.domain)) {
      error = new CycleError();
    } else {
      error = new ChainError();
    }
    // If multiple range values are mapped to this item's domain value, it must be either a fork or a duplicate
  } else if (rangesByDomain[item.domain].length > 1) {
    // If all mapped ranges are unique, there is a fork, otherwise there must be a duplicate
    if (new Set(rangesByDomain[item.domain]).size > 1) {
      error = new ForkError();
    } else {
      error = new DuplicateError();
    }
  }
  return error;
};

export const addErrors = items => {
  // Get a set of all domains
  const domains = new Set(items.map(item => item.domain));
  // Group ranges by their domain
  const rangesByDomain = items.reduce((acc, item) => {
    if (!acc[item.domain]) {
      acc[item.domain] = [];
    }
    acc[item.domain].push(item.range);
    return acc;
  }, {});

  // Augment every item with any errors
  return items.map(item => ({
    ...item,
    error: thisModule.validateItem(item, domains, rangesByDomain)
  }));
};
