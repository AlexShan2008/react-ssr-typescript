import React from "react";

import Home from "@/routes/Home";
import Counter from "@/routes/Counter";
import UserAdd from "@/routes/UserAdd";
import UserList from "@/routes/UserList";

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
  {
    path: "/user/add",
    element: <UserAdd />,
  },
  {
    path: "/user/list",
    element: <UserList />,
    index: true,
  },
];
