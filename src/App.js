import React from "react";
import routesConfig from "@/routesConfig";
import { useRoutes } from "react-router-dom";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { getStore } from "@/store";

const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      {useRoutes(routesConfig)}
    </Provider>
  );
}

export default App;
