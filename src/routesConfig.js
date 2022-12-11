import React from "react";

import Home from "@/routes/Home";
import Counter from "@/routes/Counter";
import User from "@/routes/User";
import UserAdd from "@/routes/UserAdd";
import UserList from "@/routes/UserList";
import Login from "@/routes/Login";
import Logout from "@/routes/Logout";
import Profile from "@/routes/Profile";
import NotFound from "@/routes/NotFound";

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
    path: "/user",
    element: <User />,
    children: [
      {
        path: "/user/add",
        element: <UserAdd />,
      },
      {
        path: "/user/list",
        element: <UserList />,
        index: true,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
