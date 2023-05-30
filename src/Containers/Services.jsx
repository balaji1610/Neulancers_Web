import { useState } from "react";

export default function Services() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="container text-center">
        <div
          className="col-md-12 col-sm-12"
          style={{ marginTop: "20px", marginBottom: "35px" }}
        >
          <span
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            <h1 style={{ fontWeight: "normal" }}>
              Our &nbsp;
              <span
                style={{
                  fontWeight: "bold",
                  color: show ? "#0288D1" : "#000000",
                }}
              >
                Application
              </span>{" "}
              Development Services
            </h1>
          </span>
          <div class="d-flex justify-content-center">
            <div
              style={{ display: "block", marginTop: "10px" }}
              className={show ? "titleHover" : null}
            ></div>
          </div>

          <div className="Services_desktop">
            <h6>
              App transforms the app development process so you can ship more,
            </h6>
            <h6>faster.Depoly to six targets from a single codebase</h6>
          </div>

          <div className="Services_mobile">
            <h6>
              App transforms the app development process so you can ship
              more,faster.Depoly to six targets from a single codebase
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
