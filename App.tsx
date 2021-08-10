import React from "react";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { Teste } from "./src/Screens/teste";

const App = () => {
  return (
    <Provider store={store}>
      <Teste />
    </Provider>
  );
};

export default App;
