import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import rootReducers from "../ducks";
import rootSaga from "../sagas";
import Reactotron from "../../config/reactotron";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-community/async-storage";
import { InitialState as AuthReducerProps } from "../ducks/auth";
import { InitialState as EnterpriseReducerProps } from "../ducks/enterprise";
import { InitialState as FavoriteListReducerProps } from "../ducks/favoriteList";
export interface IState {
  authReducer: AuthReducerProps;
  enterpriseReducer: EnterpriseReducerProps;
  favoriteListReducer: FavoriteListReducerProps;
}

const config = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["authReducer,enterpriseReducer"],
  debug: true,
};

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];
const composer = compose(
  applyMiddleware(...middlewares),
  Reactotron.createEnhancer()
);
const reducers = persistCombineReducers(config, rootReducers);
const persistConfig = { composer };

const store = createStore(reducers, composer);
const persistor = persistStore(store, persistConfig);

export const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(rootSaga);

export default store;
