import { useState } from "react";

export default function Howwedoit() {
  const [howwe, setHowWe] = useState(false);
  return (
    <div className="container">
      <div className="col-md-12 col-sm-12">
        <div className="row">
          <div
            className="col-md-8 col-sm-8"
            style={{ marginTop: "10px", marginBottom: "29px" }}
          >
            <div
              onMouseEnter={() => setHowWe(true)}
              onMouseLeave={() => setHowWe(false)}
              style={{ cursor: "pointer", display: "inline-block" }}
            >
              <h1
                style={{
                  color: howwe ? "#0288D1" : "#000000",
                }}
              >
                <b>How We do it?</b>
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                voluptate, consectetur tempore atque voluptas eum laboriosam
                esse soluta itaque debitis molestiae est iusto dignissimos quis
                modi ratione! Minus, facilis odit.
              </p>
            </div>{" "}
          </div>
          <div className="col-md-4 col-sm-4"> </div>
        </div>
      </div>
    </div>
  );
}
