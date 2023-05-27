import BoxChoose from "../Mini_Containers/BoxChoose";

export default function TypesChooseUS() {
  return (
    <div>
      <div className="TypesChoosUS_Desktop">
        <div className="container text-center">
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                {" "}
                <section className="left_01">
                  <BoxChoose
                    src="https://img.icons8.com/ios/100/diamond--v1.png"
                    imageClass="left_chooseBox "
                    title="Transparent Process"
                    content1="we involve you in every stage of the"
                    content2="app development journey so that you"
                    content3="can take better decisions"
                  />
                </section>
                <section className="left_02">
                  <BoxChoose
                    src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-cash-payment-xnimrodx-lineal-xnimrodx.png"
                    imageClass="left_chooseBox "
                    title="Milestone Payments"
                    content1="
                    A flexible milestone payment system enables"
                    content2="you to pay at the time of each release, which"
                    content3="we develiver every 15 days."
                  />
                </section>
              </div>
              <div className="col-md-4 col-sm-4">
                {" "}
                <img
                  width="400"
                  height="400"
                  src="https://www.britebill.com/img/products/consumer-billing-iphone-nxt.png"
                  alt="circled"
                />{" "}
              </div>
              <div className="col-md-4 col-sm-4">
                <section className="right_01">
                  <BoxChoose
                    src="https://img.icons8.com/ios/100/money-bag-euro.png"
                    imageClass="right_chooseBox "
                    titleClass="right_chooseBox"
                    contentClass="right_chooseBox"
                    title="Realiable Quality"
                    content1="we deliver 100% qualified"
                    content2="
                    product which pass several"
                    content3="quality checks and rigorous testing"
                  />
                </section>
                <section className="right_02">
                  <BoxChoose
                    src="https://img.icons8.com/wired/64/thinking-male.png"
                    imageClass="right_chooseBox "
                    titleClass="right_chooseBox"
                    contentClass="right_chooseBox"
                    title="
                    Built by experts"
                    content1="your product will be crafted by"
                    content2="experts who are veterans in their"
                    content3="specific domains"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="TypesChoosUS_Mobile">
        <div className="container text-center">
          <div className="col-md-12 col-sm-12">
            <img
              width="400"
              height="400"
              src="https://www.britebill.com/img/products/consumer-billing-iphone-nxt.png"
              alt="circled"
            />{" "}
          </div>
        </div>

        <div className="container text-center">
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                {" "}
                <section className="left_01">
                  <BoxChoose
                    src="https://img.icons8.com/ios/100/diamond--v1.png"
                    imageClass="left_chooseBox "
                    title="Transparent Process"
                    content1="we involve you in every stage of the"
                    content2="app development journey so that you"
                    content3="can take better decisions"
                  />
                </section>
              </div>
              <div className="col-md-3 col-sm-3">
                {" "}
                <section className="right_01">
                  <BoxChoose
                    src="https://img.icons8.com/ios/100/money-bag-euro.png"
                    imageClass="right_chooseBox "
                    titleClass="right_chooseBox"
                    contentClass="right_chooseBox"
                    title="Realiable Quality"
                    content1="we deliver 100% qualified"
                    content2="
                    product which pass several"
                    content3="quality checks and rigorous testing"
                  />
                </section>
              </div>
              <div className="col-md-3 col-sm-3">
                {" "}
                <section className="left_02">
                  <BoxChoose
                    src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-cash-payment-xnimrodx-lineal-xnimrodx.png"
                    imageClass="left_chooseBox "
                    title="Milestone Payments"
                    content1="
                    A flexible milestone payment system enables"
                    content2="you to pay at the time of each release, which"
                    content3="we develiver every 15 days."
                  />
                </section>
              </div>
              <div className="col-md-3 col-sm-3">
                {" "}
                <section className="right_02">
                  <BoxChoose
                    src="https://img.icons8.com/wired/64/thinking-male.png"
                    imageClass="right_chooseBox "
                    titleClass="right_chooseBox"
                    contentClass="right_chooseBox"
                    title="
                    Built by experts"
                    content1="your product will be crafted by"
                    content2="experts who are veterans in their"
                    content3="specific domains"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
