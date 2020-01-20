import { List, Map } from "immutable";

// Necessary to maintain spy reference in unit tests
// https://stackoverflow.com/questions/45111198/how-to-mock-functions-in-the-same-module-using-jest
import * as thisModule from "./validateItems";
import { Error, ErrorNames, ErrorLevels } from "./models/Errors";

export const validateItem = (item, rangesByDomain, domainsByRange) => {
  let errors = [];

  const rangesWhenItemRangeIsDomain = rangesByDomain.get(item.range)
    ? rangesByDomain.get(item.range).toSet()
    : null;
  const domainsWhenItemDomainIsRange = domainsByRange.get(item.domain)
    ? domainsByRange.get(item.domain).toSet()
    : null;

  // If when using the item's range as a domain, you find the item's range again, there is a cycle
  if (
    rangesWhenItemRangeIsDomain &&
    rangesWhenItemRangeIsDomain.has(item.domain)
  ) {
    errors.push(
      Error({
        name: ErrorNames.cycle,
        level: ErrorLevels.error
      })
    );
  }

  // If when using the item's range as a domain, and you find a value other than the item's domain (which would be a cycle), there is a chain
  // If when using the item's domain as a range, and you find a value other than the item's range (which would be a cycle), there is a chain
  if (
    (rangesWhenItemRangeIsDomain &&
      (!rangesWhenItemRangeIsDomain.has(item.domain) ||
        rangesWhenItemRangeIsDomain.size > 1)) ||
    (domainsWhenItemDomainIsRange &&
      (!domainsWhenItemDomainIsRange.has(item.range) ||
        domainsWhenItemDomainIsRange.size > 1))
  ) {
    errors.push(
      Error({
        name: ErrorNames.chain,
        level: ErrorLevels.warning
      })
    );
  }

  const rangeCounts = rangesByDomain.get(item.domain).countBy(r => r);

  // If this domain has multiple unique ranges associated, there is a fork
  if (rangeCounts.size > 1) {
    errors.push(
      Error({
        name: ErrorNames.fork,
        level: ErrorLevels.warning
      })
    );
  }

  // If this domain has multiple matches for this range, there is a duplicate
  if (rangeCounts.get(item.range) > 1) {
    errors.push(
      Error({
        name: ErrorNames.duplicate,
        level: ErrorLevels.warning
      })
    );
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
  // Group domains by their range
  const domainsByRange = items.reduce((reduced, item) => {
    if (!reduced.get(item.range)) {
      return reduced.set(item.range, List([item.domain]));
    }
    return reduced.update(item.range, ranges => ranges.push(item.domain));
  }, Map());
  return items.map(item =>
    item.update("errors", () =>
      thisModule.validateItem(item, rangesByDomain, domainsByRange)
    )
  );
};
