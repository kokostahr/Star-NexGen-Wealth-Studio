//this is the navbar, needs to be on every page for navigation
import { Link, useLocation } from "react-router-dom";


//function begins
function NavBar() {
    //useloction so that the browser knows which page the usar is on for active page
    const location = useLocation();

    return (
        //doing the html scaffolding with links to each page
        //unsure if the homepage should be money snapshot or give a dedicated page? FOR NOW imma do it
        <nav className="nav-bar">
            {/*splitting the nav into sections... logo and site name on the left!*/}
            <div className="nav-left">
                <div className="nav-logo-mark">N</div>
                <div className="nav-logo-text">
                <span>NexGen</span>
                <span>Wealth Studio</span>
                </div>
            </div>    

            {/*the links to the pages on the right side.*/}
            <div className="nav-links">

                <Link to="/" className={location.pathname === "/" ? "nav-active" : ""}
                > Homepage </Link>

                <Link to="/moneysnap" className={location.pathname === "/moneysnap" ? "nav-active" : ""}
                > Money Snapshot </Link>

                <Link to="/strattracks" className={location.pathname === "/strattracks" ? "nav-active" : ""}
                > Strategy Tracks </Link>

                <Link to="/simlab" className={location.pathname === "/simlab" ? "nav-active" : ""}
                > Simulation Lab </Link>

                {/* profile btn*/}
                <Link to="/auth" className={`nav-cta ${
                location.pathname === "/auth" ? "nav-active" : ""
                }`} > Sign Up </Link>
            </div>
        </nav>
    )
}


export default NavBar;