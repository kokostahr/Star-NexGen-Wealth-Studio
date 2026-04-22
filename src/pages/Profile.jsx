//obvious? Profile page. each page needs a navbar yeahh
//needs user details and relevant buttons

//css
import "../styles/profile.css";

//react
import { Link } from "react-router-dom";

//anything else

    

function Profile() {
    return (
        <div className="profile-page">
            
            <h1 className="profile-title"> Profile and Settings</h1>

            <div className="profile-layout">

                {/*left hand side*/}
                <div className="profile-left">

                    <div className="profile-icon">😒</div>

                    <div className="profile-field">
                        <label>Name and Surname</label>
                        <input type="text" placeholder="Your full name" />
                    </div>

                    <div className="profile-field">
                        <label>Display Name</label>
                        <input type="text" placeholder="Name shown on dashboard" />
                    </div>

                    {/*usar's saved tracks*/}
                    <div className="profile-box">
                        <h3> Saved Tracks</h3>
                        <p> No saved tracks... yet.</p>
                    </div>

                    {/*usar's saved sims*/}
                    <div className="profile-box">
                        <h3> Saved Simulations</h3>
                        <p> No saved simulations... yet.</p>
                    </div>

                    {/*usar's notis*/}
                    <div className="profile-box">
                        <h3> Notifications</h3>
                        <p> No new notifications... yet.</p>
                    </div>
                </div>

                {/*right hand side*/}
                <div className="profile-right">

                    <h2 className="section-title">Personal Info</h2>

                    <div className="profile-field">
                        <label>Email Address</label>
                        <input type="email" placeholder="example@email.com" />
                    </div>

                    <div className="profile-field">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>

                    <div className="profile-field">
                        <label>Current Employment</label>
                        <input type="text" placeholder="e.g. Full-time, Student" />
                    </div>

                    <div className="profile-field">
                        <label>Monthly Income</label>
                        <input type="number" placeholder="R 0.00" />
                    </div>

                    <div className="profile-field">
                        <label>Monthly Expenses</label>
                        <input type="number" placeholder="R 0.00" />
                    </div>

                    <div className="profile-field">
                        <label>Current Debt</label>
                        <input type="number" placeholder="R 0.00" />
                    </div>

                </div>
            </div>
        </div>
    );
}

//exporting so other files can access
export default Profile;