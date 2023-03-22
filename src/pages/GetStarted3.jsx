import { useNavigate } from 'react-router-dom';
import smile from '../images/smile.svg';
// import nike from '../images/nike.svg';
import foot2 from '../images/foot2.svg';
import Ellipse from '../images/Ellipse.svg';
import Stepper from '../components/Stepper';


const GetStarted3 = () => {
    const navigate = useNavigate();
    return (
        <div className="mobileContainer bodyBlue">
            <div className="foot2"><img src={foot2} alt=''  /></div>
            <div className="Ellipse2"><img src={Ellipse} alt=''  /></div>
            <h1 className="headerGetStarted2"><span>You Have the</span><br /><span>Power To</span></h1>
            <h2 className="subTitile"><span>There Are Many Beautiful And Attractive</span><br /><span>Plants To Your Room</span> </h2>
            <img src={smile} alt='' className="smile3" />
            {/* <img src={nike} alt='' className="nike" /> */}
            
            
            
            <Stepper activeStep={3} />
            <div className='mt86 marginAuto footerBtnBlock' >
            <button className="btnSecondary" onClick={() => navigate('/signIn')}>Next</button>
            </div>
        </div>
    )

}



export default GetStarted3;