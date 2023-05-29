import ContactBtn from "../Mini_Containers/ContactBtn";
import ContactImage from "../Mini_Containers/ContactImage";

export default function MobileContactus() {
  return (
    <div className="container text-center">
      <div
        className="col-md-12 col-sm-12"
        style={{ marginTop: "34px", marginBottom: "73px" }}
      >
        <div className="row">
          <ContactImage />
          <ContactBtn />
        </div>
      </div>
    </div>
  );
}
