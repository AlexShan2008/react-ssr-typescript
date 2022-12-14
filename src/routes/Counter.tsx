import React from "react";
import actionCreators from "@/store/actionCreators/counter";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);

  return (
    <div>
      Counter
      <p>{number}</p>
      <button onClick={() => dispatch(actionCreators.add())}>+</button>
    </div>
  );
}
