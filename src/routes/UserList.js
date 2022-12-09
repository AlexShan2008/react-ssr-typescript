import React, { useEffect, userRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "@/store/actionCreators/user";

export default function UserList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.user.list;
  });

  useEffect(() => {
    if (list.length === 0) {
      dispatch(actionCreators.getUserList());
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
