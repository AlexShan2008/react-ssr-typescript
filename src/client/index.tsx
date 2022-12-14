import React from "react";
import { hydrateRoot } from "react-dom/client";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import App from "@/App";
import { getClientStore } from "../store";
import StyleContext from "isomorphic-style-loader-react18/StyleContext";

const root = document.getElementById("root");
const { store, history } = getClientStore();
const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return removeCss.map((dispose) => dispose());
};

hydrateRoot(
  root,
  <Router history={history}>
    <StyleContext.Provider value={{ insertCss }}>
      <App store={store} />
    </StyleContext.Provider>
  </Router>
);
