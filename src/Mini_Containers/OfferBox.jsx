export default function OfferBox({ number, title1, title2, imgSrc, alt }) {
  return (
    <div class="d-flex justify-content-around">
      <div>{number}</div>
      <div class="align-self-start">
        <div>
          <h3>
            {" "}
            {title1} <br />
            {title2}
          </h3>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </div>
      <div>
        <img width="67" height="67" src={imgSrc} alt={alt} />
      </div>
    </div>
  );
}
