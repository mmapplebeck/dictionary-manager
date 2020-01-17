import Error, { ErrorLevels } from "./models/Errors";

export const validateItem = (item, domains, rangesByDomain) => {
  // Check for errors in order of my percieved severity
  let error = "";
  // If this item's range is also an existing domain, it must be either a cycle or a chain
  if (domains.has(item.range)) {
    // If a domain exists that maps to this item's domain, there is a cycle, otherwise it must be a chain
    if (rangesByDomain[item.range].includes(item.domain)) {
      error = new Error("Cycle", ErrorLevels.error);
    } else {
      error = new Error("Chain", ErrorLevels.warning);
    }
    // If multiple range values are mapped to this item's domain value, it must be either a fork or a duplicate
  } else if (rangesByDomain[item.domain].length > 1) {
    // If all mapped ranges are unique, there is a fork, otherwise there must be a duplicate
    if (new Set(rangesByDomain[item.domain]).size > 1) {
      error = new Error("Fork", ErrorLevels.warning);
    } else {
      error = new Error("Duplicate", ErrorLevels.warning);
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
    error: validateItem(item, domains, rangesByDomain)
  }));
};
