import MovieList from "./components/MovieList";
import Timer from "./components/Timer";
import movies from "./assets/movies";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My first Dynamic React Application</h1>

      <Counter />

      <Timer startTime={5} />
      <MovieList movies={movies} headingText="Movie List" />
    </div>
  );
}

export default App;
