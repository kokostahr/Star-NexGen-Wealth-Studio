//obvious? signup page. each page needs a navbar yeahh
//needs input fields for user details and relevant buttons
//had an idea to just make 1 page for the signup and login that changes when needed
//lets see how this goes LOL

//css
import "../styles/authpage.css";

//react
import { Link } from "react-router-dom";
import { useState } from "react"; //changing the state of the page should probably use context...but i think usestate is easier for now


//for the navbar here i need the signup button to disappear. will work on it later

function AuthPage() {
    //need the variables so that the info can switch ofc
    const [isLogin, setIsLogin] = useState(false);

    //a lot of if statements to swap between the info on the page
    return (
        <div className="auth-page">

            <h1 className="auth-title"> {isLogin ? "Login" : "Sign Up"}</h1>

            {/*form for logging \ signing in*/}
            <div className="auth-box">

                {/*first the form for signup page*/}
                {!isLogin && (
                    <>
                        <label> Name and Surname: </label>
                        <input type="text" placeholder="Enter your full name" />

                        <label> Email Address: </label>
                        <input type="email" placeholder="Enter your email" />

                        <label> Cellphone Number: </label>
                        <input type="text" inputmode="numeric" placeholder="Enter your number" />

                         <label> Create a Password: </label>
                        <input type="password" placeholder="Enter a password" />

                        <button className="auth-btn"> Sign Up!</button>

                        <p className="auth-switch">
                            Already have an account? Click {" "}
                            <span onClick={() => setIsLogin(true)}> here </span> 
                            {" "} to Login.
                        </p>
                    </>
                )}

                {/*the form for login*/}
                {isLogin && (
                    <>
                        <label> Email Address: </label>
                        <input type="email" placeholder="Enter your email" />

                        <label> Password: </label>
                        <input type="password" placeholder="Enter your password" />
                        
                        <button className="auth-btn"> Sign Up!</button>

                        <p className="auth-switch">
                            Forgot your password? <span> Click here</span>
                        </p>

                        <p className="auth-switch">
                            Dont have an account? Click{" "}
                            <span onClick={() => setIsLogin(false)}> here</span> {" "}
                            to create one
                        </p>
                    </>  
                )}
            </div>
        </div>
    );
}

//exporting so other files can access
export default AuthPage;