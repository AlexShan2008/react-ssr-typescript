import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import { getClientStore } from "../store";

const root = document.getElementById("root");
const store = getClientStore();

hydrateRoot(
  root,
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>
);
