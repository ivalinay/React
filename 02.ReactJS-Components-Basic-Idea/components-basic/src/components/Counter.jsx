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

  //   if (count < 0) {
  //     return <h3>Invalid count!</h3>;
  //   }

  return (
    <div>
      <h3> Counter</h3>

      {count < 0 ? <p>Invalid count!</p> : null}

      <p> Count: {count}</p>
      <button onClick={decrementClickHandler}>-</button>
      <button onClick={clearCounterHandler}>clear</button>
      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}
