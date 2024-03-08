export default function  Movie(props){
    return (
        <article>
           <h3>{props.title}</h3>
           <p>Year: {props.data.year}</p>
           <p>Cast: {props.data.actor}</p>
        </article>
    );
}