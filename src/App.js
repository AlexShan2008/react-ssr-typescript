import React from "react";
import routesConfig from "@/routesConfig";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {useRoutes(routesConfig)}
    </>
  );
}

export default App;
