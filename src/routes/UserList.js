import React, { useEffect, userRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UserList() {
  // const dispatch = useDispatch();
  const list = useSelector((state) => state.user.list);

  useEffect(() => {
    if (list.length === 0) {
      useDispatch();
    }
  }, [list]);
  return (
    <ul>
      {list.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
