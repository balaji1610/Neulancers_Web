import { useState } from "react";

export default function BoxChoose({
  src,
  imageClass,
  title,
  titleClass,
  content1,
  content2,
  content3,
  contentClass,
}) {
  const [boxtchoose, setBoxChoose] = useState(false);
  return (
    <div
      class="d-flex flex-column mb-3"
      onMouseEnter={() => setBoxChoose(true)}
      onMouseLeave={() => setBoxChoose(false)}
      style={{ cursor: "pointer" }}
    >
      <div class="p-2">
        <img width="67" height="67" src={src} className={imageClass} />
      </div>
      <div class="p-2">
        <h2 className={titleClass} style={{ color: boxtchoose && "red" }}>
          {title}
        </h2>
      </div>
      <div class="p-2">
        {" "}
        <p className={contentClass}>
          {content1} <br />
          {content2} <br />
          {content3}
        </p>
      </div>
    </div>
  );
}
