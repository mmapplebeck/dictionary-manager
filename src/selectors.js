import { createSelector } from "reselect";

export const getDictionaries = state => state.get("dictionaries");

export const getDictionaryNames = createSelector(
  getDictionaries,
  dictionaries => dictionaries.map(d => d.get("name"))
);
