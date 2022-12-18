import React, { useEffect, useState } from "react";
import actionCreators from "@/store/actionCreators/counter";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const [age, setAge] = useState(0);
  const number = useSelector((state) => state.counter.number);

  useEffect(() => {
    setAge(0);
  });

  return (
    <div>
      Counter
      <p>{number}</p>
      <button onClick={() => dispatch(actionCreators.add())}>+</button>
    </div>
  );
}
