import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  const decrementClickHandler = () => {
    setCount(count - 1);
  };

  const clearCounterHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <h1> Counter</h1>

      <p> Count: {count}</p>
      <button onClick={decrementClickHandler}>-</button>
      <button onClick={clearCounterHandler}>clear</button>
      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}
