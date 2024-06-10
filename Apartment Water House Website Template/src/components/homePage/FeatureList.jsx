import Feature from "./Feature";

export default function FeatureList(props) {
  return (
    
    <div className={props.className}>
      <div className="info-table">
        <ul>
          <li>
            <Feature imgSrc="/images/info-icon-01.png" heading="115 м²" subheading="Total Flat Space" />
          </li>
          <li>
            <Feature imgSrc="/images/info-icon-02.png" heading="Contract" subheading="Contract Ready" />
          </li>
          <li>
            <Feature imgSrc="/images/info-icon-03.png" heading="Payment" subheading="Payment Process" />
          </li>
          <li>
            <Feature imgSrc="/images/info-icon-04.png" heading="Safety" subheading="24/7 Under Control" />
          </li>
        </ul>
      </div>
    </div>
    
  );
}
