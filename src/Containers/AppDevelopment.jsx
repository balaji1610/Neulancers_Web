import ThreetypesApp from "../Mini_Containers/ThreetypesApp";
import TypesAppbox from "../Mini_Containers/TypesAppbox";
export default function AppDevelopment() {
  return (
    <div>
      <div className="App_screen">
        <ThreetypesApp />

        <div className="container text-center">
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <TypesAppbox
                title={"Native Apps"}
                content={
                  "Are created for one specific platform or operation system"
                }
                programming={
                  "Java,Kotlin,Python,Swift,Objective-C,C++, and React"
                }
              />
              <div className="col-md-1 col-sm-1 "></div>
              <TypesAppbox
                title={"Web Apps"}
                content={
                  "Web apps behave similarly to native apps but are accessed via a web browser on your mobile device"
                }
                programming={"HTML,CSS,JS,Ruby etc"}
              />
              <div className="col-md-1 col-sm-1 "></div>
              <TypesAppbox
                title={"Hybrid Apps"}
                content={
                  "Web apps behave similarly to native apps but are accessed via a web browser on your mobile device"
                }
                programming={"Ionic,Objective C,Swift,HTML5,etc"}
              />
              <div className="col-md-1 col-sm-1 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
