import React, { useEffect } from "react";
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

// Fetch data on the sever side
UserList.loadData = (store) => {
  // When this request(Promise) finished, and then sent this HTML with data to client side.
  return store.dispatch(actionCreators.getUserList());
};
