import React from "react";
import { useDispatch } from "react-redux";
import actionCreators from "../store/actionCreators/auth";

export default function (params) {
  const dispatch = useDispatch();
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(actionCreators.logout());
  };
  return <button onClick={handleLogout}>Logout</button>;
}
