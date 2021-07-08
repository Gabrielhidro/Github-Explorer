import { useState } from "react";

export function Counter() {
  const [counter, setCouner] = useState(0);

  function increment() {
    setCouner(counter + 1);
  }

  return (
    <>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
}
