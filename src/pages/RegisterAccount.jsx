import { useNavigate } from 'react-router-dom';
import backIcon from '../images/backIcon.svg';


const RegisterAccount = () => {
    const navigate = useNavigate();
    return (
        <div className="mobileContainer bodyWhite">
            <div className='backBtnBlock' >
            <button className="backBtnIconReg" onClick={() => navigate('/signIn')}><img src={backIcon} alt=''/></button>
            </div>
            <h1 className="registerMainTitle"><span>Register Account</span></h1>
            <h2 className="mainSubTitile"><span>Fill your details or continue with</span><br /><span>social media</span> </h2>
            <div className="formBlock">
            <form>
            <label htmlFor="email">Your Name</label>
              <input type="email" name="email" placeholder="enter your name" />
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" placeholder="xyz@gmail.com" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="enter your password" />
            </form>
            </div>
            
            <div className='btnBlockPrimary' >
            <button className="btnPrimary" onClick={() => navigate('/explore')}>Sign Up</button>
            </div>
            <button className="btnNewUser marginAuto" onClick={() => navigate('/signIn')}><span className='newUserBtnTitle'>Already Have Account?</span> <span className='newUserBtnTitleCreate'>Log In</span></button>
        </div>
    )

}



export default RegisterAccount;