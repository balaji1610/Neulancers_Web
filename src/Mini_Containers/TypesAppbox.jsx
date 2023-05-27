export default function TypesAppbox({ title, content, programming }) {
  return (
    <div className="col-md-3 col-sm-3 Apps_types_box">
      <div
        class="d-flex align-items-start flex-column mb-3"
        style={{ height: "90px" }}
      >
        <div class="mb-auto p-2">
          <h3>{title}</h3>
        </div>
        <div class="p-2">
          <p>{content}</p>
        </div>

        <div class=" mb-auto p-2">
          <h3>Technology Used</h3>
        </div>
        <div class="p-2">
          {" "}
          <p>{programming}</p>
        </div>
      </div>
    </div>
  );
}
