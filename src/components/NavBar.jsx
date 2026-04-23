//this is the navbar, needs to be on every page for navigation
//FORGOT TO IMPORT LINK FOR NAVIGATION
import { Link, useLocation } from "react-router-dom";



//function begins
function NavBar() {
    //useloction so that the browser knows which page the usar is on for active page
    const location = useLocation();

    return (
        //doing the html scaffolding with links to each page
        //unsure if the homepage should be money snapshot or give a dedicated page? FOR NOW imma do it
        <nav className="nav-bar">
            {/*landing page*/}
            <Link to="/"
                className={location.pathname === "/" ? "nav-active" : ""}>
                Homepage </Link> 
            
            {/*other sections*/}
            <Link to="/moneysnap"
            className={location.pathname === "/moneysnap" ? "nav-active" : ""}>
                Money Snapshot </Link>
            
            <Link to="/strattracks"
            className={location.pathname === "/strattracks" ? "nav-active" : ""}>
                Strategy Tracks </Link>
            
            <Link to="/simLab"
            className={location.pathname === "/simLab" ? "nav-active" : ""}>
                Simulation Lab </Link>
            
            <Link to="/auth"
            className={location.pathname === "/auth" ? "nav-active" : ""}>
                SignUp </Link>

            {/*<Link to="/profile" 
            className={location.pathname === "/profile" ? "nav-active" : ""}> 
            Profile </Link>*/}
            
        </nav>
    )
}


export default NavBar;