import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ host: "192.168.40.110" })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

console.tron = Reactotron;

export default Reactotron;
