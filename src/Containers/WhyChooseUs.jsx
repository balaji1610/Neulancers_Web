import { useState } from "react";

export default function WhyChooseUs() {
  const [choose, setChoose] = useState(false);
  return (
    <div
      className="container text-center"
      style={{ marginTop: "40px", marginBottom: "50px" }}
    >
      <div className="col-md-12 col-sm-12">
        <span
          onMouseEnter={() => setChoose(true)}
          onMouseLeave={() => setChoose(false)}
          style={{ cursor: "pointer", display: "inline-block" }}
        >
          <h1 style={{ fontWeight: "normal" }}>
            Why &nbsp;
            <span
              style={{
                fontWeight: "bold",
                color: choose ? "#0288D1" : "#000000",
              }}
            >
              Choose
            </span>{" "}
            Us
          </h1>
        </span>
        <div class="d-flex justify-content-center">
          {" "}
          <div className={choose ? "titleHover" : null}></div>{" "}
        </div>
        <div style={{ marginTop: "25px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
        </div>
      </div>
    </div>
  );
}
