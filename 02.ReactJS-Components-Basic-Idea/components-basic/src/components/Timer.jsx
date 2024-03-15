export default function Timer(props) {
  let time = 0;

  setTimeout(() => {
    time++;
  }, 2000);

  return (
    <div>
      <h3>Timer</h3>

      <p>{time}</p>
    </div>
  );
}
