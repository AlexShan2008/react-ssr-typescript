import React, { userRef } from "react";
import { useNavigate } from "react-router-dom";

export default function UserAdd() {
  const nameRef = userRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    navigate("/user/list");
  };
  return (
    <form onSubmit={handleSubmit}>
      User name
      <input ref={nameRef} />
      <input type="submit">Submit</input>
    </form>
  );
}
