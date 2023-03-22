import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className="mobileContainer bodyWhite">
            <h1 className="mainTitle"><span>Hello Again!</span></h1>
            <h2 className="mainSubTitile"><span>Fill your details or continue with</span><br /><span>social media</span> </h2>
            <div className="formBlock">
            <form>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" placeholder="xyz@gmail.com" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Enter your password" />
            </form>
            </div>
            <div className='btnBlock' >
            <button className="btnPrimary" onClick={() => navigate('/explore')}>Sign In</button>
            </div>
            <button className="btnNewUser marginAuto" onClick={() => navigate('/registerAccount')}><span className='newUserBtnTitle'>New User?</span> <span className='newUserBtnTitleCreate'>Create Account</span></button>
        </div>
    )

}



export default SignIn;