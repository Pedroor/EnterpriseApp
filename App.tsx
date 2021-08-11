import React, { useState } from "react";
import store, { configureStore } from "./src/redux/store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import Routes from "./src/Routes";
import { ActivityIndicator } from "react-native";
import theme from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [navigation, setNavigation] = useState(null);
  const { persistor } = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
