import { useNavigate } from 'react-router-dom';
import smile from '../images/smile.svg';
// import nike from '../images/nike.svg';
import foot2 from '../images/foot2.svg';
import Highlight_10 from '../images/Highlight_10.svg';
import Ellipse from '../images/Ellipse.svg';
import Stepper from '../components/Stepper';


const GetStarted2 = () => {
    const navigate = useNavigate();
    return (
        <div className="mobileContainer bodyBlue">
            <div className="foot2"><img src={foot2} alt=''  /></div>
            <div className="Ellipse2"><img src={Ellipse} alt=''  /></div>
            <h1 className="headerGetStarted2"><span>Let’s Start Journey</span><br /><span>With Our Shop</span></h1>
            <h2 className="subTitile"><span>Smart, Gorgeous & Fashionable</span><br /><span>Collection Explor Now</span> </h2>
            <Stepper activeStep={2} />
            <img src={smile} alt='' className="smile2" />
            {/* <img src={nike} alt='' className="nike" /> */}
            <img src={Highlight_10} alt='' className="Highlight_111" />
            <div className=' mt86 marginAuto footerBtnBlock' >
            <button className="btnSecondary" onClick={() => navigate('/getStarted3')}>Next</button>
            </div>
        </div>
    )

}



export default GetStarted2;