import { useState } from "react";

export default function OfferBox({ number, title1, title2, imgSrc, alt }) {
  const [offerbox, setOfferBox] = useState(false);

  return (
    <div
      class="d-flex justify-content-around"
      style={{
        cursor: "pointer",
        color: offerbox ? "#ffffff" : "#000000",
        backgroundColor: offerbox ? "#0288D1 " : "#f4f4f4",
        height: "201px",
        borderRadius: "9px",
      }}
      onMouseEnter={() => setOfferBox(true)}
      onMouseLeave={() => setOfferBox(false)}
    >
      <div style={{ marginTop: "24px" }}>{number}</div>
      <div class="align-self-start" style={{ marginLeft: "22px" }}>
        <div>
          <h3 style={{ marginTop: "30px" }}>
            {" "}
            {title1} <br />
            {title2}
          </h3>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </div>
      <div style={{ marginTop: "-28px" }}>
        <img width="67" height="67" src={imgSrc} alt={alt} />
      </div>
    </div>
  );
}
