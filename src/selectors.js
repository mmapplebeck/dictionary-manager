import { createSelector } from "reselect";
import { ErrorLevels } from "./models/Errors";

export const getDictionaries = state => state.get("dictionaries");

export const getDictionaryNames = createSelector(
  getDictionaries,
  dictionaries => dictionaries.map(d => d.name)
);

export const getLatestDictionary = createSelector(
  getDictionaries,
  dictionaries => dictionaries.last() || null
);

export const getDictionaryByName = createSelector(
  getDictionaries,
  (__, name) => name,
  (dictionaries, name) =>
    dictionaries.find(d => d.name === decodeURIComponent(name))
);

export const getDictionaryItems = createSelector(
  getDictionaryByName,
  dictionary => dictionary.items
);

export const getErrorCount = createSelector(
  getDictionaryItems,
  items =>
    items.filter(item => item.error && item.error.level === ErrorLevels.error)
      .size
);

export const getWarningCount = createSelector(
  getDictionaryItems,
  items =>
    items.filter(item => item.error && item.error.level === ErrorLevels.warning)
      .size
);
