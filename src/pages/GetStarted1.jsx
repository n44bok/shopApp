import { useNavigate } from "react-router-dom";
import highlight1 from "../images/Highlight1.svg";
import highlight2 from "../images/Highlight2.svg";
import smile from "../images/smile.svg";
// import nike from "../images/nike.svg";
import foot from "../images/foot.svg";
import Highlight_10 from "../images/Highlight_10.svg";
import Stepper from "../components/Stepper";

const GetStarted1 = () => {
  const navigate = useNavigate();
  return (
    <div className="mobileContainer bodyBlue">
      <div className="headerTitleContainer" >
        <img src={highlight1} alt="" className="highlight1" />
        <h1 className="headerGetStarted">
          <span>WELCOME TO</span>
          <br />
          <span>SHOP</span>
        </h1>
      </div>
      <div className="highlight2" ><img src={highlight2} alt="" /></div>
      <Stepper activeStep={1} />
      <img src={smile} alt="" className="smile" />
      {/* <img src={nike} alt="" className="nike" /> */}
      <img src={foot} alt="" className="foot" />
      <img src={Highlight_10} alt="" className="Highlight_10" />
      <img src={Highlight_10} alt="" className="Highlight_11" />
      <div className=" mt155 marginAuto btnBlockFooter" >
      <button className="btnSecondary" onClick={() => navigate("/getStarted2")}>
        Get started
      </button>
      </div>
    </div>
  );
};

export default GetStarted1;
