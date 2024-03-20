import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  const decrementClickHandler = () => {
    setCount(count - 1);
  };

  const clearCounterHandler = (event) => {
    console.log(event);
    setCount(0);
  };

  
 

  return (
    <div>
      <h3> Counter</h3>

      {warning}

      <p> Count: {count}</p>
      <button onClick={decrementClickHandler}>-</button>
      <button onClick={clearCounterHandler}>clear</button>
      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}