import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h3>Current login user</h3>
      <p>Name:{user && user.name}</p>
    </div>
  );
}
