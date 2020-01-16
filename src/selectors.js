import { createSelector } from "reselect";

export const getDictionaries = state => state.get("dictionaries");

export const getDictionaryNames = createSelector(
  getDictionaries,
  dictionaries => dictionaries.map(d => d.name)
);

export const getLatestDictionary = createSelector(
  getDictionaries,
  dictionaries => dictionaries.last() || null
);

export const getDictionaryByUrl = createSelector(
  getDictionaries,
  (__, name) => name,
  (dictionaries, name) =>
    dictionaries.find(d => d.name === decodeURIComponent(name))
);
