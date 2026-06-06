//Profile page
//needs user details and relevant buttons. full redo because i hate the layout of this

//css
import "../styles/profile.css";

//react
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

//anything else
import { UserContext } from "../context/UserContext";

    

function Profile() {
    const { userIncome, setUserIncome, userName, userEmail } = useContext(UserContext);

    //edit mode toggle. a NEW addition so that users can flip between editing and not editing their profile
    const [isEditing, setIsEditing] = useState(false);

    //the stuff that they can edit when toggles
    const [displayName, setDisplayName] = useState("");
    const [employment, setEmployment] = useState("");
    const [expenses, setExpenses] = useState("");
    const [debt, setDebt] = useState("");

    const [saved, setSaved] = useState(false);

    function handleSave() {
        setIsEditing(false);
        setSaved(true);

        setTimeout(() => setSaved(false), 2000);
    }

    return (
        <div className="profile-page">

            {/*header*/}
            <div className="profile-header">
                <div className="profile-avatar">🧿</div>
                    <div className="profile-header-info">
                        <h1>{userName || "User"}</h1>
                        <p>{userEmail}</p>
                    </div>

                    <button className="edit-btn" onClick={() =>
                    setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
            </div>

            <div className="profile-layout">

                {/*lefthand side stuff */}
                <div className="profile-sidebar">

                    <div className="profile-card">
                        <h3>Saved Tracks</h3>
                        <p>No saved tracks yet.</p>
                    </div>

                    <div className="profile-card">
                        <h3>Saved Simulations</h3>
                        <p>No saved simulations yet.</p>
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

                        <div className="profile-field">
                            <label>Full Name</label>
                            <input type="text" value={userName} readOnly />
                        </div>

                        <div className="profile-field">
                            <label>Display Name</label>
                            <input
                                type="text"
                                placeholder="Name shown on dashboard"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                readOnly={!isEditing} />
                        </div>

                        <div className="profile-field">
                            <label>Email Address</label>
                            <input type="email" value={userEmail} readOnly />
                        </div>

                        <div className="profile-field">
                            <label>Current Employment</label>
                            <input
                                type="text"
                                placeholder="e.g. Full-time, Student"
                                value={employment}
                                onChange={(e) => setEmployment(e.target.value)}
                                readOnly={!isEditing} />
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
                            readOnly={!isEditing} />
                    </div>

                    <div className="profile-field">
                        <label>Monthly Expenses</label>
                        <input
                            type="number"
                            placeholder="R 0.00"
                            value={expenses}
                            onChange={(e) => setExpenses(e.target.value)}
                            readOnly={!isEditing} />
                    </div>

                    <div className="profile-field">
                        <label>Current Debt</label>
                        <input
                            type="number"
                            placeholder="R 0.00"
                            value={debt}
                            onChange={(e) => setDebt(e.target.value)}
                            readOnly={!isEditing} />
                    </div>
                </div>

                {/*save button*/}
                {isEditing && (
                    <button className="save-btn" onClick={handleSave}>
                    Save Changes
                    </button>
                )}

                {saved && <p className="save-confirm fade-in">Profile saved successfully!</p>}

                </div>
            </div>
        </div>
    );
}

//exporting so other files can access
export default Profile;