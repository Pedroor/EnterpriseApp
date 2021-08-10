import { createStore, applyMiddleware, compose } from "redux";
import { InitialState as AuthReducerProps } from "../ducks/auth";
import rootReducer from "../ducks";
import rootSaga from "../sagas";
import Reactotron from "../../config/reactotron";

import createSagaMiddleware from "redux-saga";

export interface IState {
  authReducer: AuthReducerProps;
}

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), Reactotron.createEnhancer())
);

sagaMiddleware.run(rootSaga);

export default store;
