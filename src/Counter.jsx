import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "40px" }}>Counter: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px", margin: "10px",color: "black" }}> Add + </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: "10px", margin: "10px", color: "black" }}> Subtract - </button>

    </div>
  );
}

export default Counter;





















