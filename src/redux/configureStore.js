import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer, initialState } from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    rootReducer, // root reducer
    initialState,
     composeEnhancer(applyMiddleware(thunkMiddleware))
  );

  return store;
};

export default configureStore;