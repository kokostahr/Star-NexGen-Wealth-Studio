//this is the navbar, needs to be on every page for navigation
//space to import stuff



//function begins
function NavBar() {
    return (
        //doing the html scaffolding with links to each page
        //unsure if the homepage should be money snapshot or give a dedicated page?
        <nav class="nav-bar">
            <Link to="/">Homepage</Link> 
            <Link to="/strattracks">Strategy Tracks</Link>
            <Link to="/simLab">Simulation Lab</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/signup">SignUp</Link>
        </nav>
    )
}


export default NavBar;