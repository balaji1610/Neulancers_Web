import { useState } from "react";

export default function TypesAppbox({ title, content, programming }) {
  const [typseapp, setTypesapp] = useState(false);
  return (
    <div
      className="col-md-3 col-sm-3"
      onMouseEnter={() => setTypesapp(true)}
      onMouseLeave={() => setTypesapp(false)}
      style={{
        backgroundColor: "#212121",
        height: "300px",
        borderRadius: "10px",
        cursor: "pointer",
        border: typseapp && "1px solid  #757575 ",
      }}
    >
      <div
        class="d-flex align-items-start flex-column mb-3"
        style={{ height: "90px" }}
      >
        <div class="mb-auto p-2">
          <h3 style={{ color: typseapp ? "#0288D1" : "#ffffff" }}>
            {title}
            <span
              style={{
                marginTop: "8px",
                display: "block",
                width: "111px",
                borderBottom: typseapp
                  ? "3px solid #f95959"
                  : "3px solid #ffffff",
              }}
            ></span>
          </h3>
        </div>
        <div class="p-2">
          <p style={{ color: "#eaeaea", textAlign: "initial" }}>{content}</p>
        </div>

        <div class=" mb-auto p-2">
          <h5 style={{ color: typseapp ? "#0288D1" : "#595959" }}>
            Technology Used
          </h5>
        </div>
        <div class="p-2">
          {" "}
          <p style={{ color: "#eaeaea", textAlign: "initial" }}>
            {programming}
          </p>
        </div>
      </div>
    </div>
  );
}
