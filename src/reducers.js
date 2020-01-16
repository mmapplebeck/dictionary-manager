import { List } from "immutable";
import { combineReducers } from "redux-immutable";

import Dictionary from "./models/Dictionary";
import { ADD_DICTIONARY } from "./actions";

function dictionaries(state = List(), action) {
  switch (action.type) {
    case ADD_DICTIONARY:
      return state.push(
        Dictionary({
          name: action.payload
        })
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
