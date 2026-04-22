//this is the navbar, needs to be on every page for navigation
//FORGOT TO IMPORT LINK FOR NAVIGATION
import { Link } from "react-router-dom";



//function begins
function NavBar() {
    return (
        //doing the html scaffolding with links to each page
        //unsure if the homepage should be money snapshot or give a dedicated page? FOR NOW imma do it
        <nav className="nav-bar">
            {/*landing page*/}
            <Link to="/">Homepage</Link> 
            {/*other sections*/}
            <Link to="/moneysnap"> Money Snapshot</Link>
            <Link to="/strattracks">Strategy Tracks</Link>
            <Link to="/simLab">Simulation Lab</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/signup">SignUp</Link>
        </nav>
    )
}


export default NavBar;