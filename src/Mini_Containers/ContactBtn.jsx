import { useState } from "react";

export default function ContactBtn() {
  const [appdevelop, setAppDevelop] = useState(false);
  return (
    <div className="col-md-8 col-sm-8">
      <div className="d-flex flex-column mb-3">
        <div className="p-2">
          <span
            onMouseEnter={() => setAppDevelop(true)}
            onMouseLeave={() => setAppDevelop(false)}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            <h1
              style={{
                fontWeight: "bold",
                color: appdevelop ? "#0288D1" : "#000000",
              }}
            >
              App Development Done
            </h1>
            <h1
              style={{
                fontWeight: "bold",
                color: appdevelop ? "#0288D1" : "#000000",
              }}
            >
              with{" "}
              <span
                style={{
                  fontWeight: "normal",
                  color: appdevelop ? "#000000" : "#000000",
                }}
              >
                Lastest Technology
              </span>
            </h1>
          </span>
        </div>
        <div className="p-2">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            <p> mollitia, molestiae quas vel sint commodi repudiandae </p>
          </p>
        </div>
        <div className="p-2">
          <button type="button" className="btn btn-outline-primary contactus ">
            CONTACT US
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
