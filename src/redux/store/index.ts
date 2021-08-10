import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../ducks";
import rootSaga from "../sagas";
import Reactotron from "../config/reactotron";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), Reactotron.createEnhancer())
);

sagaMiddleware.run(rootSaga);

export default store;
