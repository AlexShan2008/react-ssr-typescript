import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function User() {
  return (
    <>
      <ul>
        <li>
          <Link to="/user/add">Add user</Link>
        </li>
        <li>
          <Link to="/user/list">User list</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
