import React, { useState } from "react";

export default function Counter(params) {
  const [count, setCount] = useState(0);
  return (
    <div>
      Counter
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
