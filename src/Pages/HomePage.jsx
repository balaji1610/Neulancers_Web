import ContactUs from "../Containers/ContactUs";
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
      <ContactUs />
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
