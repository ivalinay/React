import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Counter</h1>

      <p> Count: {count}</p>
    </div>
  );
}
