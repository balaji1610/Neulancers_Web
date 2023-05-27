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
  return (
    <div class="d-flex flex-column mb-3">
      <div class="p-2">
        <img width="67" height="67" src={src} className={imageClass} />
      </div>
      <div class="p-2">
        <h2 className={titleClass}>{title}</h2>
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
