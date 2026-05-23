import { FaCamera } from "react-icons/fa";
import "./Profile.css";

function Profile () {
    return (

           <div className="page">

              <h2>Account Settings</h2>

                <div className="profile-card">
                  <div className="profile-top">
                    <div className="avatar-box">

                    <img
                    src="/gemini image.png"
                    alt="profile" className="avatar" />
                    <span className="camera-icon">
                      <FaCamera />
                    </span>
                    </div>

                    <div>
                        <h3>Ayesha Fatima Saba</h3>
                        <p>ayesha.k0894@gmail.com</p>
                    </div>
                </div>
                <p className="bio">
                    Your profile is your identity on PopX.
                    keep your details updated to get the best
                    personalized experience.
                    </p>

                <div className="divider"></div>  

                <div className="spacer"></div>
                
                <div className="divider"></div>

            </div>

        </div>
    );
}

export default Profile;