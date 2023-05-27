import ContactUs from "../Containers/ContactUs";
import Services from "../Containers/Services";
import Offer from "../Containers/Offer";
import AppDevelopment from "../Containers/AppDevelopment";
import SecuredApp from "../Containers/SecuredApp";
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
      <br /> <br /> <br />
    </div>
  );
}
