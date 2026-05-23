import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {

    const navigate = useNavigate();
 return (

      <div className="main">
      <div className="box">

      <h1> Create your <br />PopX account</h1>

    <div className="field">
    <label>Full Name*</label>
    <input type="text" placeholder="Ayesha Fatima Saba" />
    </div>



    <div className="field">
    <label>Phone number*</label>
    <input type="text" placeholder="Ayesha Fatima Saba" />
    </div>

    <div className="field">
    <label>Email address*</label>
    <input type="email" placeholder="Ayesha Fatima Saba" />
    </div>

    <div className="field">
    <label>Password *</label>
    <input type="password" placeholder="Ayesha Fatima Saba" />
    </div>

    <div className="field">
    <label>Company name</label>
    <input type="text" placeholder="Ayesha Fatima Saba" />
    </div>

    <div className="agency-box">
    <p> Are you an Agency?<span>*</span></p>

    <div className="radio-box">
    <div className="radio-item">

    <input type="radio" name="agency" defaultChecked />
    <span>Yes</span>
    </div>

    <div className="radio-item">
    <input type="radio" name="agency" />
    <span>No</span>
    </div>

    </div>
    </div>
    <button 
    className="signupBtn"
    onClick={() => navigate("/profile")}>Create Account</button>
    
    </div>
    </div>

 );

}

export default Signup;

