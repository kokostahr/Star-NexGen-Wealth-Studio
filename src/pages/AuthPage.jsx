//obvious? signup page. each page needs a navbar yeahh
//needs input fields for user details and relevant buttons
//had an idea to just make 1 page for the signup and login that changes when needed
//lets see how this goes LOL. adding in some general juice now

//css
import "../styles/authpage.css";

//react
import { Link } from "react-router-dom";
import { useState } from "react"; //changing the state of the page should probably use context...but i think usestate is easier for now
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

//other stuff
import { UserContext } from "../context/UserContext";


//for the navbar here i need the signup button to disappear. will work on it later

function AuthPage() {
    //using context to store the username in a dynamic but kinda static way xD
    const { setUserName, setUserEmail } = useContext(UserContext);

    //need the variables so that the info can switch ofc
    const [isLogin, setIsLogin] = useState(false);

    //navigation declaration
    const navigate = useNavigate();

    //doing form validation now
    //the fields for the form
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", password: "",
    });

    //errar messages
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState("");

    //animation stuff
    const [shake, setShake] = useState(false);

    //function that will handle eroors within the form
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    //a function that'll handle the validation of input
    function validate() {
        let newErrors = {};

        //doing the validation message when there is an errar fpr sogn up page
        if (!isLogin) {
            if (!formData.name.trim()) newErrors.name = "Wrong. Enter your name.";
            if (!formData.phone.trim()) newErrors.phone = "That is not a numerical value? Enter your phone number."
        }

        //for both login and sign up
        if (!formData.email.trim()) {
            newErrors.email = "Formatting is incorrect. Your email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be 8 characters or more.";
        }

        return newErrors;
    }

    //basic function so the form can be submitted. need to link this to the profile page T^T
    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setGeneralError("Fix the highlighted fields to move on.")
            setShake(true);

            //stop the shakeing after the end of the anim
            setTimeout(() => setShake(false), 500);
            return;
        }

        if (Object.keys(validationErrors).length === 0) {
            setGeneralError("");

            //sucess message when things are done RIGHT
            alert(isLogin ? "Login successful 😌🔥" : "Account Created. Welcome to NexGen!")
            setUserName(formData.name);
            setUserEmail(formData.email);
            //then take the usar to the empty barebones profile for now
            navigate("/profile");
        }
        
    }


    
    //a lot of if statements to swap between the info on the page
    return (
        <div className="auth-page">

            <h1 className="auth-title"> {isLogin ? "Login" : "Sign Up"}</h1>

            {/*the error massage*/}
            {generalError && <p className="general-error"> {generalError}</p>}



            {/*form for logging \ signing in*/}
            <form className={`auth-box ${shake ? "shake" : ""} ${isLogin ? "fade-in" : "fade-in"}`}
            onSubmit={handleSubmit}>

                {/*first the form for signup page*/}
                {!isLogin && (
                    <>
                        <label> Name and Surname: </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="field-error">{errors.name}</p>}

                        <label> Cellphone Number: </label>
                        <input
                            name="phone"
                            type="text"
                            inputmode="numeric"
                            placeholder="Enter your number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="field-error"> {errors.phone}</p>}
                    </>
                )}

                {/*shared form fields*/}
                <label> Email Address: </label>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="field-error"> {errors.email}</p>}

                <label> Create a Password: </label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="field-error"> {errors.password}</p>}
                
                {/*the button to submit the form*/}
                <button className="auth-btn" type="submit">
                    {isLogin ? "Login!" : "Sign Up!"}
                </button>

                {/*link to switch the form to the necessay one...*/}
                {isLogin ? (
                    <>
                        {/*<p className="auth-switch">
                            Forgot your password? Click{" "} <span>here</span>
                        </p>*/}
                        <p className="auth-switch">
                            Dont have an account? Click{" "} <span onClick={() => setIsLogin(false)}>here</span>
                            {" "} to create one.
                        </p>
                    </>
                ) : (
                        <p className="auth-switch">
                            Already have an account? Click{" "}
                            <span onClick={() => setIsLogin(true)}>here</span>
                            {" "} to Login.
                    </p>
                )}

            </form>
        </div>
    );
}

//exporting so other files can access
export default AuthPage;