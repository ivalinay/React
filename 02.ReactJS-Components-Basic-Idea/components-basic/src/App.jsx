import MovieList from "./components/MovieList";
import "./App.css";

const movies = [
  {
    title: "The Matrix",
    description: "Description here",
  },
  {
    title: "Man of Steel",
    description: "Description here",
  },
  {
    tittle: "Harry Potter",
    description: "Description here",
  },
];

function App() {
  return (
    <div>
      <h1>My first Dynamic React Application</h1>
      <MovieList headingText="Filmi" secondaryText="Secondary Text" />
    </div>
  );
}

export default App;
