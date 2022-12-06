import React from "react";

import Home from "@/routes/Home";
import Counter from "@/routes/Counter";

export default [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
];
