import { useState } from "react";

export default function SecuredApp() {
  const [secured, setSecured] = useState(false);
  return (
    <div>
      <div
        className="container text-center"
        style={{ marginTop: "5vh", marginBottom: "5vh" }}
      >
        <div className="col-md-12 col-sm-12">
          <span
            onMouseEnter={() => setSecured(true)}
            onMouseLeave={() => setSecured(false)}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            <h1 style={{ fontWeight: "normal" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: secured ? "#0288D1" : "#000000",
                }}
              >
                Secured
              </span>{" "}
              App Development
            </h1>
          </span>
          <div class="d-flex justify-content-center">
            {" "}
            <div className={secured ? "titleHover" : null}></div>{" "}
          </div>
        </div>
      </div>

      <div className="container text-center" style={{ marginBottom: "5vh" }}>
        <div className="col-md-12 col-sm-12">
          <p>
            {" "}
            Nemo voluptate, consectetur tempore atque voluptas eum laboriosam
            esse soluta itaque debitis molestiae est iusto dignissimos quis modi
            ratione! Minus, facilis odit. voluptate, consectetur tempore atque
            voluptas eum laboriosam esse soluta itaque debitis molestiae est
            iusto dignissimos quis modi ratione! Minus, facilis odit. voluptate,
            consectetur tempore atque voluptas eum laboriosam esse{" "}
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
