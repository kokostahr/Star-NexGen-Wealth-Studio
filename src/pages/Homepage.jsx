//obvious? Landingpage. each page needs a navbar yeahh 
//added this after realising i want users to be introduced to the webapp first
//simple as heck layout 😭

//react stuff
import { Link } from "react-router-dom";

//css
import "../styles/homepage.css";


function Homepage() {
    //all functions in react start with return. ik why. whatever is in return gets shown on the page
    return (
    <div className="homepage-container">
        {/*a basic welcome message for the usar*/}

        <section className="hero">
            <h1> Welcome, to NexGen Wealth Studio </h1>
            <p> A webapp that guides you, through a journey of confident finacial decision making.<br>
            </br> Enjoy your stay.</p>
        </section>

        {/*need call to action things that'll take usar into the actual meat y potatoes of this webapp*/}
        <div className="homepage-buttons">
            <Link to="/strattracks" className="btn-wan">
            Explore the different strategy tracks.</Link>

            <Link to="/simlab" className="btn-too">
            Try one of the available finacial simulations!</Link>
        </div>

        {/*and finally, encouraging usar to ofc create an account so infor can be save*/}
        <section className="homepage-info">
            <h2> What is this platform about? </h2>
            <p>
                The NexGen Wealth Studio was built to assist young professionals with managaing
                their finiances and finacial-related decisions through guided Strategy Tracks and 
                Interactive simulations. <Link to="/auth" className="links"> Create an account </Link> or <Link to="/auth" className="links"> Login</Link> to save your experiences within
                this platform.
            </p>
        </section>

    </div>
    );
}

//exporting so other files can access
export default Homepage;