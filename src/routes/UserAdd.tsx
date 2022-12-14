import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionCreators from "@/store/actionCreators/user";

export default function UserAdd() {
  const nameRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    dispatch(
      actionCreators.addUser({
        id: Date.now(),
        name,
      })
    );
    navigate("/user/list");
  };
  return (
    <form onSubmit={handleSubmit}>
      User name
      <input ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
