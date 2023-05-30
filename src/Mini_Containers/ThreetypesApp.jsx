import { useState } from "react";

export default function ThreetypesApp() {
  const [appdevelop, setAppdevelop] = useState(false);
  return (
    <div className="container" style={{ paddingTop: "70px" }}>
      <div className="col-md-12 col-sm-12">
        <div className="row">
          <div className="col-md-8 col-sm-8">
            {" "}
            <div class="align-self-start">
              <div>
                <h1 style={{ color: "#878787" }}>
                  3 Types of{" "}
                  <span
                    style={{
                      display: "inline-block",
                      width: "18vh",
                      borderBottom: "3px solid #c3c3c3",
                    }}
                  ></span>
                </h1>
              </div>
              <span
                onMouseEnter={() => setAppdevelop(true)}
                onMouseLeave={() => setAppdevelop(false)}
                style={{ cursor: "pointer", display: "inline-block" }}
              >
                <h1
                  style={{
                    fontSize: "89px",

                    color: appdevelop ? "#0288D1" : "#c3c3c3",
                  }}
                >
                  App Development
                </h1>
              </span>
              <div
                style={{
                  color: "#858585",
                  marginTop: "23px",
                  marginBottom: "42px",
                }}
              >
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas porro quae voluptate animi accusamus autem quos
                  quibusdam, repellat magni non sequi impedit, velit incidunt ab
                  ducimus mollitia fugiat, officiis odit! Voluptas porro quae
                  voluptate animi accusamus autem quos quibusdam
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            {" "}
            <img
              width="350"
              height="200"
              src="https://img.freepik.com/free-vector/illustration-circle-stamp-banner_53876-28481.jpg"
              alt="circled"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
