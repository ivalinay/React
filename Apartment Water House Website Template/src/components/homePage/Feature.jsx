export default function Feature(props) {
  return (
    <div>
      <img src={props.imgSrc} alt="" style={{ maxWidth: "52px" }} />
      <h4>
        {props.heading}
        <br />
        <span>{props.subheading}</span>
      </h4>
    </div>
  );
}
