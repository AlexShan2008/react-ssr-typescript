import React from "react";
import { Link } from "react-router-dom";

export default function Header(params) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
    </ul>
  );
}
