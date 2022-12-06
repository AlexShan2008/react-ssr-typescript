import React from "react";
import routesConfig from "@/routesConfig";
import { useRoutes } from "react-router-dom";

function App() {
  return useRoutes(routesConfig);
}

export default App;
