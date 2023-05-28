import HeadofDevelopment from "../Mini_Containers/HeadofDevelopment";
import DevelopmentIcons from "../Mini_Containers/DevelopmentIcons";
export default function DesktopDevelopmentProcess() {
  return (
    <div>
      <div className="DevelopmentProcess_Desktop ">
        <div className="DevelopmentProcess_bg">
          <HeadofDevelopment />
          <div className="container">
            <div className="col-md-12 col-sm-12 ">
              <div className="d-flex justify-content-around">
                <DevelopmentIcons
                  src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/external-planning-industrial-production-factory-automation-smart-industries-smashingstocks-mixed-smashing-stocks.png"
                  title="Planning"
                />
                <div style={{ marginTop: "130px" }}>
                  {" "}
                  <DevelopmentIcons
                    src="https://img.icons8.com/ios/100/design--v1.png"
                    title="Design"
                  />
                </div>

                <div style={{ marginTop: "52px" }}>
                  {" "}
                  <DevelopmentIcons
                    src="https://img.icons8.com/ios/100/code--v1.png"
                    title="Development"
                  />
                </div>
                <div style={{ marginTop: "130px" }}>
                  {" "}
                  <DevelopmentIcons
                    src="https://img.icons8.com/dotty/80/maintenance.png"
                    title="Testing"
                  />
                </div>
                <div style={{ marginTop: "52px" }}>
                  <DevelopmentIcons
                    src="https://img.icons8.com/ios/100/launched-rocket.png"
                    title="Lanch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
