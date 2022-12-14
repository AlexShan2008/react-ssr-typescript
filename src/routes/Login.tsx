import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionCreators from "@/store/actionCreators/auth";

export default function Login() {
  const nameRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const user = { name };

    dispatch(actionCreators.login(user));
  };
  return (
    <form onSubmit={handleSubmit}>
      User name
      <input ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
