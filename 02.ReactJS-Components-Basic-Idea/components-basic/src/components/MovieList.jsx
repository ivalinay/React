import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      <h2>{props.headingText}</h2>

      <ul>
        <li>
          <li>
            <Movie data={props.movies[0]} />
            <Movie data={props.movies[1]} />
            <Movie data={props.movies[2]} />
          </li>
        </li>
      </ul>
    </div>
  );
}
