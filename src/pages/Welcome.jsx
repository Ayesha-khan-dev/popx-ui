import "./Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to PopX</h1>

      <p>
        Discover,connect and grow with PopX-your all in one platfrom
      </p>

      <button className="createBtn" onClick={() => navigate("/Signup")}>Create Account</button>

      <button className="loginBtn" style={{backgroundColor: "#c9b8ff, color: #6c25ff"}} onClick={() => navigate("/login")}>Already Registered? Login</button>
   </div>

</div>

);

}

export default Welcome;
