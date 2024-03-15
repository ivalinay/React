import { useState } from "react";

export default function Timer(props) {
  const hookResult = useState();

  let time = 0;
  console.log(`Current time is = ${time}`);

  setTimeout(() => {
    time++;
    console.log(`Current time is = ${time}`);

    // react pre render ???
  }, 2000);

  return (
    <div>
      <h3>Timer</h3>

      <p>{time}</p>
    </div>
  );
}
