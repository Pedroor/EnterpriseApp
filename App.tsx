import React from "react";
import store, { configureStore } from "./src/redux/store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import Routes from "./src/Routes";
import { Teste } from "./src/Screens/teste";
import { ActivityIndicator } from "react-native";
import theme from "./src/styles/theme";

const App = () => {
  const { persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes />
          <Teste />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
