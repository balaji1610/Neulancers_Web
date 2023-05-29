export default function TypesAppbox({ title, content, programming }) {
  return (
    <div className="col-md-3 col-sm-3 Apps_types_box">
      <div
        class="d-flex align-items-start flex-column mb-3"
        style={{ height: "90px" }}
      >
        <div class="mb-auto p-2">
          <h3 style={{ color: "#ffffff" }}>
            {title}
            <span
              style={{
                marginTop: "8px",
                display: "block",
                width: "111px",
                borderBottom: "3px solid #ffffff",
              }}
            ></span>
          </h3>
        </div>

        <div class="p-2">
          <p style={{ color: "#eaeaea", textAlign: "initial" }}>{content}</p>
        </div>

        <div class=" mb-auto p-2">
          <h5 style={{ color: "#595959" }}>Technology Used</h5>
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
