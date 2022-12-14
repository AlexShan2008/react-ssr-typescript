import React from "react";
import routesConfig from "@/routesConfig";
import { useRoutes } from "react-router-dom";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import actionCreators from "@/store/actionCreators/auth";

function App({ store }) {
  return (
    <Provider store={store}>
      <Header />
      {useRoutes(routesConfig)}
    </Provider>
  );
}

App.loadData = (store) => {
  return store.dispatch(actionCreators.validate());
};

export default App;
