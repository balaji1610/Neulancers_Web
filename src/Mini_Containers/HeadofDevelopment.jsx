import { useState } from "react";

export default function HeadofDevelopment() {
  const [development, setDevelopment] = useState(false);
  return (
    <div className="container text-center ">
      <div className="Development_process_first">
        <div className="col-md-12 col-sm-12  ">
          <span
            onMouseEnter={() => setDevelopment(true)}
            onMouseLeave={() => setDevelopment(false)}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            <h1 style={{ fontWeight: "normal", color: "#ffffff" }}>
              Our &nbsp;
              <span
                style={{
                  fontWeight: "bold",
                  color: development ? "#0288D1" : "#ffffff",
                }}
              >
                Development
              </span>{" "}
              Process
            </h1>
          </span>
          <div class="d-flex justify-content-center">
            {" "}
            <div className={development ? "titleHover" : null}></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
