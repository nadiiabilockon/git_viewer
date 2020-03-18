import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from './index';

const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
  );

  return store;
};

export default configureStore;