import { createSelector } from "reselect";
import { List } from "immutable";

import { ErrorLevels } from "./models/Errors";

export const getDictionaries = state => state.get("dictionaries");

export const getDictionaryNames = createSelector(
  getDictionaries,
  dictionaries => dictionaries.map(d => d.name)
);

export const getDictionaryByName = createSelector(
  getDictionaries,
  (__, name) => name,
  (dictionaries, name) =>
    dictionaries.find(d => d.name === decodeURIComponent(name))
);

export const getDictionaryItems = createSelector(
  getDictionaryByName,
  dictionary => (dictionary ? dictionary.items : List())
);

export const getErrorCount = createSelector(getDictionaryItems, items =>
  items.reduce(
    (sum, item) =>
      sum +
      (item.errors
        ? item.errors.filter(e => e.level === ErrorLevels.error).size
        : 0),
    0
  )
);

export const getWarningCount = createSelector(getDictionaryItems, items =>
  items.reduce(
    (sum, item) =>
      sum +
      (item.errors
        ? item.errors.filter(e => e.level === ErrorLevels.warning).size
        : 0),
    0
  )
);
