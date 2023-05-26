import DesktopContactus from "./DesktopContactus";
import MobileContactus from "./MobileContactus";
export default function ContactUs() {
  return (
    <div>
      <div className="contactUs_Deskop">
        <DesktopContactus />
      </div>

      <div className="contactUs_Mobile">
        <MobileContactus />
      </div>
    </div>
  );
}
