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

export const validateItem = (item, rangesByDomain, domainsByRange) => {
  let errors = [];

  // If when using the range as a domain, you find the range again, there is a cycle
  if (
    rangesByDomain.get(item.range) &&
    rangesByDomain.get(item.range).contains(item.domain)
  ) {
    errors.push(CycleError());
  }

  // If when using the range as a domain, or the domain as a range, you get multiple matches, there is a chain
  if (
    (rangesByDomain.get(item.range) &&
      rangesByDomain.get(item.range).toSet().size > 1) ||
    (domainsByRange.get(item.domain) &&
      !domainsByRange.get(item.domain).toSet().size > 1)
  ) {
    errors.push(ChainError());
  }

  const rangeCounts = rangesByDomain.get(item.domain).countBy(r => r);

  // If this domain has multiple unique ranges there is a fork
  if (rangeCounts.size > 1) {
    errors.push(ForkError());
  }

  // If this domain has multiple matches for this range, there is a duplicate
  if (rangeCounts.get(item.range) > 1) {
    errors.push(DuplicateError());
  }

  return List(errors);
};

export const validateItems = items => {
  // Group ranges by their domain
  const rangesByDomain = items.reduce((reduced, item) => {
    if (!reduced.get(item.domain)) {
      return reduced.set(item.domain, List([item.range]));
    }
    return reduced.update(item.domain, ranges => ranges.push(item.range));
  }, Map());
  // Group domains by their ranges
  const domainsByRange = items.reduce((reduced, item) => {
    if (!reduced.get(item.range)) {
      return reduced.set(item.range, List([item.domain]));
    }
    return reduced.update(item.range, ranges => ranges.push(item.domain));
  }, Map());
  // Augment every item with any errors
  return items.map(item =>
    item.update("errors", () =>
      thisModule.validateItem(item, rangesByDomain, domainsByRange)
    )
  );
};
