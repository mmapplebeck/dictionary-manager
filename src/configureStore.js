import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeWithDevTools()
  );

  return store;
}
