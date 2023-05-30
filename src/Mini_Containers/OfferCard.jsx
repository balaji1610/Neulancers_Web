export default function OfferCard({ children }) {
  return (
    <div className="row box_align_set">
      {" "}
      <div className="col-md-1 col-sm-1 "></div>
      <div className="col-md-4 col-sm-4">{children[0]}</div>
      <div className="col-md-1 col-sm-1 box_offer_align"></div>
      <div className="col-md-4 col-sm-4 "> {children[1]}</div>
    </div>
  );
}
