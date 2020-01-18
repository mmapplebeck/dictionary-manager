import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import createRootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
