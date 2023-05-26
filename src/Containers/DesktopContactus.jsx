import ContactBtn from "../Mini_Containers/ContactBtn";
import ContactImage from "../Mini_Containers/ContactImage";

export default function DesktopContactus() {
  return (
    <div className="container text-center">
      <div className="col-md-12 col-sm-12">
        <div className="row">
          <ContactBtn />
          <ContactImage />
        </div>
      </div>
    </div>
  );
}
