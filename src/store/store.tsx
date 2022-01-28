import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { apiReducer } from "./reducers";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  apiReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSagas);

export default store;
