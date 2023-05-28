//ContactUs
import DesktopContactus from "../Containers/DesktopContactus";
import MobileContactus from "../Containers/MobileContactus";
import Services from "../Containers/Services";
import Offer from "../Containers/Offer";
import AppDevelopment from "../Containers/AppDevelopment";
import SecuredApp from "../Containers/SecuredApp";
import Howwedoit from "../Containers/Howwedoit";
import HowweContent from "../Containers/HowweContent";
import WhyChooseUs from "../Containers/WhyChooseUs";
import TypesChooseUS from "../Containers/TypesChooseUS";
import DesktopDevelopmentProcess from "../Containers/DesktopDevelopmentProcess";

import MobileDevelopmentProcess from "../Containers/MobileDevelopmentProcess";
export default function HomePage() {
  return (
    <div>
      <div className="contactUs_Deskop">
        <DesktopContactus />
      </div>
      <div className="contactUs_Mobile">
        <MobileContactus />
      </div>
      <Services />
      <Offer />
      <div className="App_development_desktop">
        {" "}
        <AppDevelopment />
      </div>
      <SecuredApp />
      <Howwedoit />
      <HowweContent />
      <WhyChooseUs />
      <TypesChooseUS />
      <div className="Development_Process_Desktop">
        {" "}
        <DesktopDevelopmentProcess />
      </div>
      <div className="Development_Process_Mobile">
        {" "}
        <MobileDevelopmentProcess />{" "}
      </div>
      <br /> <br /> <br />
    </div>
  );
}
