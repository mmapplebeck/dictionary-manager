import { List, Map } from "immutable";

// Necessary to maintain spy reference in unit tests
// https://stackoverflow.com/questions/45111198/how-to-mock-functions-in-the-same-module-using-jest
import * as thisModule from "./validateItems";
import {
  CycleError,
  ChainError,
  ForkError,
  DuplicateError
} from "./models/Errors";

export const validateItem = (item, domains, rangesByDomain) => {
  // Check for errors in order of my percieved severity
  let error = null;
  // If this item's range is also an existing domain, it must be either a cycle or a chain
  if (domains.get(item.range)) {
    // If a domain exists that maps to this item's domain, there is a cycle, otherwise it must be a chain
    if (rangesByDomain.get(item.range).contains(item.domain)) {
      error = CycleError();
    } else {
      error = ChainError();
    }
    // If multiple range values are mapped to this item's domain value, it must be either a fork or a duplicate
  } else if (rangesByDomain.get(item.domain).size > 1) {
    // If all mapped ranges are unique, there is a fork, otherwise there must be a duplicate
    if (rangesByDomain.get(item.domain).toSet().size > 1) {
      error = ForkError();
    } else {
      error = DuplicateError();
    }
  }
  return error;
};

export const validateItems = items => {
  // Get a set of all domains
  const domains = items.map(item => item.domain).toSet();
  // Group ranges by their domain
  const rangesByDomain = items.reduce((reduced, item) => {
    if (!reduced.get(item.domain)) {
      return reduced.set(item.domain, List([item.range]));
    }
    return reduced.update(item.domain, ranges => ranges.push(item.range));
  }, Map());
  // Augment every item with any errors
  return items.map(item =>
    item.update("error", () =>
      thisModule.validateItem(item, domains, rangesByDomain)
    )
  );
};
