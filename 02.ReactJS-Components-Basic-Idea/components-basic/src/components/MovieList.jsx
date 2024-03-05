export default function MovieList(props) {

  return (
    <div className="movie-list">
      <h2>{props.headingText}</h2>

      <ul>
        <li>First movie</li>
        <li>Second movie</li>
      </ul>
    </div>
  );
}
