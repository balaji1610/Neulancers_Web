export default function DevelopmentIcons({ src, title }) {
  return (
    <div className="align-self-start">
      <div className="icons_round">
        <img width="67" height="60" src={src} className="icons_image" />
      </div>

      <div
        style={{
          color: "#ffffff",
          textAlign: "center",
          marginTop: "9px",
        }}
      >
        <h5>{title}</h5>
      </div>
    </div>
  );
}
