//Profile page
//needs user details and relevant buttons. full redo because i hate the layout of this

//css
import "../styles/profile.css";

//react
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

//anything else
import { UserContext } from "../context/UserContext";
import { saveData, loadData } from "../util/storage";

function Profile() {

    //grab the usar stuff from context
    const { userIncome, setUserIncome, userName, setUserName, userEmail } = useContext(UserContext);
    const savedSimulations = loadData("savedSimulations", []);
    const savedTracks = loadData("savedTracks", []);

    //load the saved profile or the defaults
    const savedProfile = loadData("profile", {
        fullName: "",
        employment: "",
        expenses: "",
        debt: "",
        userIncome: userIncome,
        userName: userName, //display name
    });

    //edit mode toggle. so usar can switch between editing and not editing
    const [isEditing, setIsEditing] = useState(false);

    //editable fields (full name is separate from display name)
    const [fullName, setFullName] = useState(savedProfile.fullName);
    const [employment, setEmployment] = useState(savedProfile.employment);
    const [expenses, setExpenses] = useState(savedProfile.expenses);
    const [debt, setDebt] = useState(savedProfile.debt);

    //save confirmation
    const [saved, setSaved] = useState(false);

    //sync saved values into context on load
    useEffect(() => {
        if (savedProfile.userIncome) setUserIncome(savedProfile.userIncome);
        if (savedProfile.userName) setUserName(savedProfile.userName);
    }, []);

    //function to save the data to the profile
    function handleSave() {

        const profileData = {
            fullName,
            employment,
            expenses,
            debt,
            userIncome,
            userName, //display name
        };

        //save to localStorage
        saveData("profile", profileData);

        //exit edit mode + show confirmation
        setIsEditing(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    }

    return (
        <div className="profile-page">

            {/*header*/}
            <div className="profile-header">
                <div className="profile-avatar">😴</div>

                <div className="profile-header-info">
                    <h1>{userName || "User"}</h1>
                    <p>{userEmail}</p>
                </div>

                <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>

            <div className="profile-layout">

                {/*lefthand side stuff */}
                <div className="profile-sidebar">

                    <div className="profile-card">
                        <h3>Saved Tracks</h3>

                        {savedTracks.length === 0 && <p>No saved tracks yet.</p>}

                        {savedTracks.length > 0 && (
                            <ul className="saved-list">
                                {savedTracks.map((track, index) => (
                                    <li key={index}>
                                        <strong>{track.title}</strong>
                                        <br />
                                        <span>{new Date(track.timestamp).toLocaleString()}</span>
                                        <br />

                                        {/* optional continue button */}
                                        <Link to={`/trackdetails/${track.id}`} className="btn-too small-btn">
                                            Continue
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>


                    <div className="profile-card">
                        <h3>Saved Simulations</h3>

                        {savedSimulations.length === 0 && <p>No saved simulations yet.</p>}

                        {savedSimulations.length > 0 && (
                            <ul className="saved-list">
                                {savedSimulations.map((sim, index) => (
                                    <li key={index}>
                                        <strong>{sim.title}</strong>
                                        <br />
                                        <span>{new Date(sim.timestamp).toLocaleString()}</span>
                                        <br />

                                        {/* OPTIONAL: Continue button */}
                                        <Link to={`/simstudio/${sim.id}`} className="btn-too small-btn">
                                            Continue
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>


                    <div className="profile-card">
                        <h3>Notifications</h3>
                        <p>No new notifications.</p>
                    </div>

                </div>

                {/*right hand side stuff*/}
                <div className="profile-content">

                    {/*usar personal info*/}
                    <div className="profile-section">
                        <h2>Personal Info</h2>

                        {/*full name (separate from display name)*/}
                        <div className="profile-field">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Your real name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>

                        {/*display name (this is the username)*/}
                        <div className="profile-field">
                            <label>Display Name</label>
                            <input
                                type="text"
                                placeholder="Name shown on dashboard"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>

                        {/*email (not editable)*/}
                        <div className="profile-field">
                            <label>Email Address</label>
                            <input type="email" value={userEmail} readOnly />
                        </div>

                        {/*employment*/}
                        <div className="profile-field">
                            <label>Current Employment</label>
                            <input
                                type="text"
                                placeholder="e.g. Full-time, Student"
                                value={employment}
                                onChange={(e) => setEmployment(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                    </div>

                    {/*user financial info*/}
                    <div className="profile-section">
                        <h2>Financial Info</h2>

                        <div className="profile-field">
                            <label>Monthly Income</label>
                            <input
                                type="number"
                                value={userIncome}
                                onChange={(e) => setUserIncome(Number(e.target.value))}
                                readOnly={!isEditing}
                            />
                        </div>

                        <div className="profile-field">
                            <label>Monthly Expenses</label>
                            <input
                                type="number"
                                placeholder="R 0.00"
                                value={expenses}
                                onChange={(e) => setExpenses(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>

                        <div className="profile-field">
                            <label>Current Debt</label>
                            <input
                                type="number"
                                placeholder="R 0.00"
                                value={debt}
                                onChange={(e) => setDebt(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                    </div>

                    {/*save button*/}
                    {isEditing && (
                        <button className="save-btn" onClick={handleSave}>
                            Save Changes
                        </button>
                    )}

                    {saved && (
                        <p className="save-confirm fade-in">
                            Profile saved successfully!
                        </p>
                    )}

                </div>
            </div>
        </div>
    );
}

//exporting so other files can access
export default Profile;
