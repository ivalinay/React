import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  const clearCounterHandler = (event) => {
    console.log(event);
    setCount(0);
  };

  return (
    <div>
      <h3>Counter</h3>

      {count < 0 ? <p>Invalid count!</p> : <p>Valid count!</p>}
      {count === 0 && <p>Please start incrementing</p>}

      <p>Count: {count}</p>

      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={clearCounterHandler}>clear</button>
      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}
