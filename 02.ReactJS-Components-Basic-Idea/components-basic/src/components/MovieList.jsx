import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      <h2>{props.headingText}</h2>

      <ul>
        <li>
        <li><Movie data={props[0]} /></li>
         <li><Movie data={props[1]} /></li>
         <li> <Movie data={props[2]} /></li>
         <li> <Movie data={props[2]} /></li>
         <li> <Movie data ={props[3]}/></li>
         <li>< Movie data = {props[4]}/></li></li>
      </ul>
    </div>
  );
}
