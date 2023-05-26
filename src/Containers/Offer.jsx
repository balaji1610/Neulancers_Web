import OfferBox from "../Mini_Containers/OfferBox";
import OfferCard from "../Mini_Containers/OfferCard";
export default function Offer() {
  return (
    <div>
      {" "}
      <div className="container text-center">
        <div className="col-md-12 col-sm-12">
          <h1>what we Offer</h1>
        </div>
      </div>{" "}
      <div className="container">
        <div className="col-md-12 col-sm-12">
          <OfferCard>
            <OfferBox
              number="1"
              title1="Android App"
              title2="Development"
              imgSrc="https://img.icons8.com/external-others-inmotus-design/67/external-Android-basic-ui-elements-others-inmotus-design.png"
              alt="Android App"
            />
            <OfferBox
              number="2"
              title1="web App "
              title2="Development"
              imgSrc="https://img.icons8.com/ios/50/000000/monitor--v1.png"
              alt="web App"
            />
          </OfferCard>
          <OfferCard>
            <OfferBox
              number="3"
              title1="Android App"
              title2="Development"
              imgSrc="https://img.icons8.com/pastel-glyph/64/000000/intelligent-person.png"
              alt="Android App"
            />
            <OfferBox
              number="4"
              title1="Android App"
              title2="Development"
              imgSrc="https://img.icons8.com/windows/64/000000/chatbot.png"
              alt="Android App"
            />
          </OfferCard>
          <OfferCard>
            <OfferBox
              number="5"
              title1="Blockchain"
              imgSrc="https://img.icons8.com/external-prettycons-lineal-prettycons/49/external-blockchain-technology-prettycons-lineal-prettycons.png"
              alt="Blockchain"
            />
            <OfferBox
              number="6"
              title1="internet of"
              title2="Things"
              imgSrc="https://img.icons8.com/sf-regular-filled/48/home.png"
              alt="Android App"
            />
          </OfferCard>
        </div>
      </div>
    </div>
  );
}
