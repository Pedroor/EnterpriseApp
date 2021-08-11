import React from "react";
import store, { configureStore } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Teste } from "./src/Screens/teste";
import { ActivityIndicator } from "react-native";

const App = () => {
  const { persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Teste />
      </PersistGate>
    </Provider>
  );
};

export default App;
