import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  const decrementClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1> Counter</h1>

      <p> Count: {count}</p>
      <button onClick={incrementClickHandler}>+</button>
      <button onClick={decrementClickHandler}>-</button>
    </div>
  );
}
