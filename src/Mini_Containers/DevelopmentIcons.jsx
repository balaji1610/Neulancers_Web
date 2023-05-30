import { useState } from "react";

export default function DevelopmentIcons({ src, title }) {
  const [developProcess, setDevelopProcess] = useState(false);
  return (
    <div className="align-self-start">
      <div
        onMouseEnter={() => setDevelopProcess(true)}
        onMouseLeave={() => setDevelopProcess(false)}
        style={{
          width: "90px",
          height: "91px",
          borderRadius: "68%",
          backgroundColor: "#ffffff",
          border: developProcess ? "3px solid #0288D1" : "2px solid #000000",
          cursor: "pointer",
        }}
      >
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
