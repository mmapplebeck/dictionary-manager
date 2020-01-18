import { List, Map } from "immutable";
import { combineReducers } from "redux-immutable";

import Dictionary from "./models/Dictionary";
import DictionaryItem from "./models/DictionaryItem";
import {
  ADD_DICTIONARY,
  DELETE_DICTIONARY,
  ADD_DICTIONARY_ITEM,
  UPDATE_DICTIONARY_ITEM,
  DELETE_DICTIONARY_ITEM,
  VALIDATE_DICTIONARY_ITEMS
} from "./actions";

import {
  CycleError,
  ChainError,
  ForkError,
  DuplicateError
} from "./models/Errors";

const validateItem = (item, domains, rangesByDomain) => {
  console.log("in validate item", item);
  console.log(domains.get(item.range));
  console.log(rangesByDomain.get(item.domain));
  // Check for errors in order of my percieved severity
  let error = null;
  // If this item's range is also an existing domain, it must be either a cycle or a chain
  if (domains.get(item.range)) {
    console.log("in cycle/chain");
    // If a domain exists that maps to this item's domain, there is a cycle, otherwise it must be a chain
    if (rangesByDomain.get(item.range).contains(item.domain)) {
      error = CycleError();
    } else {
      error = ChainError();
    }
    // If multiple range values are mapped to this item's domain value, it must be either a fork or a duplicate
  } else if (rangesByDomain.get(item.domain).size > 1) {
    console.log("in fork/dup");
    // If all mapped ranges are unique, there is a fork, otherwise there must be a duplicate
    if (rangesByDomain.get(item.domain).toSet().size > 1) {
      error = ForkError();
    } else {
      error = DuplicateError();
    }
  }
  return error;
};

const validateItems = items => {
  const domains = items.map(item => item.domain).toSet();
  console.log(domains);
  const rangesByDomain = items.reduce((reduced, item) => {
    if (!reduced.get(item.domain)) {
      return reduced.set(item.domain, List([item.range]));
    }
    return reduced.update(item.domain, ranges => ranges.push(item.range));
  }, Map());
  console.log(rangesByDomain);
  return items.map(item =>
    item.update("error", () => validateItem(item, domains, rangesByDomain))
  );
};

function dictionaryItems(state = List(), action, dictionaries) {
  switch (action.type) {
    case ADD_DICTIONARY_ITEM:
      return state.push(
        DictionaryItem({
          domain: action.payload.domain,
          range: action.payload.range
        })
      );
    case UPDATE_DICTIONARY_ITEM:
      return state.update(action.payload.index, () =>
        DictionaryItem({
          domain: action.payload.domain,
          range: action.payload.range
        })
      );
    case DELETE_DICTIONARY_ITEM:
      return state.delete(action.payload.index);
    case VALIDATE_DICTIONARY_ITEMS:
      return validateItems(state);
    default:
      return state;
  }
}

function dictionaries(state = List(), action) {
  switch (action.type) {
    case ADD_DICTIONARY:
      return state.push(
        Dictionary({
          name: action.payload
        })
      );
    case DELETE_DICTIONARY:
      return state.filter(d => d.name !== action.payload);
    case ADD_DICTIONARY_ITEM:
    case UPDATE_DICTIONARY_ITEM:
    case DELETE_DICTIONARY_ITEM:
    case VALIDATE_DICTIONARY_ITEMS:
      return state.map(d =>
        d.name === action.payload.name
          ? Dictionary({
              name: d.name,
              items: dictionaryItems(d.items, action)
            })
          : d
      );
    default:
      return state;
  }
}

const createRootReducer = () =>
  combineReducers({
    dictionaries
  });

export default createRootReducer;
