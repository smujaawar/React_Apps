import React, { useState } from "react";

const Countapp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(count * 0);
  };

  return (
    <section>
      <div className="cdiv">
        <h1>Count App </h1>
      </div>

      <div className="cdiv">
        <h1>{count}</h1>
      </div>
      <div className="cdiv">
        <button id="button1" onClick={decrement}>-</button>
        <button id="button2" onClick={increment}>+</button>
      </div>

      <div className="cdiv">
        <button id="button3" onClick={reset}>Reset the value</button>
      </div>
    </section>
  );
};

export default Countapp;
