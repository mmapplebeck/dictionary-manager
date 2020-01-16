import { List } from "immutable";
import { combineReducers } from "redux-immutable";

import Dictionary from "./models/Dictionary";
import DictionaryItem from "./models/DictionaryItem";
import {
  ADD_DICTIONARY,
  DELETE_DICTIONARY,
  ADD_DICTIONARY_ITEM,
  UPDATE_DICTIONARY_ITEM,
  DELETE_DICTIONARY_ITEM
} from "./actions";

function dictionaryItems(state = List(), action) {
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
