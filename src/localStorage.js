import { Map, List } from "immutable";

import { emptyState } from "./reducers";
import Dictionary from "./models/Dictionary";
import DictionaryItem from "./models/DictionaryItem";
import { Error } from "./models/Errors";

const key = "dictionaryManager";

const transform = stateAsJson =>
  Map({
    dictionaries: List(
      stateAsJson.dictionaries.map(d =>
        Dictionary({
          name: d.name,
          items: List(
            d.items.map(i =>
              DictionaryItem({
                domain: i.domain,
                range: i.range,
                error: i.error
                  ? Error({
                      name: i.error.name,
                      level: i.error.level
                    })
                  : null
              })
            )
          )
        })
      )
    )
  });

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return emptyState;
    }
    return transform(JSON.parse(serializedState));
  } catch (err) {
    return emptyState;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch {
    // ignore write errors
  }
};
