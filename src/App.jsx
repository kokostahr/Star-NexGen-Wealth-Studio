//now to do all that crazy importing stuff 😭heavily reliant on andre & lindo's code
//space for css when we do that
import "./App.css";

//actually first first, browser router, for dynamic navigation across the app.react is preloaded so this makes it easier tojump between pages from the client....i think

//react stuff
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//pages
import Homepage from "./pages/Homepage";
import MoneySnapshot from "./pages/MoneySpanshot";
import StrategyTracks from "./pages/StrategyTracks";
import TrackDetail from "./pages/TrackDetail";
import SimulationLab from "./pages/SimulationLab";
import SimulationStudio from "./pages/SimulationStudio";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";
//import Login from "./pages/Login";

//components 
import NavBar from "./components/NavBar";
import UserProvider from "./context/UserContext";


function App(){
  //the stuff inside return function is what'll end up on the webpage
  return (
    <UserProvider>
      <>
        <Router>
          <header>
            <NavBar />
          </header>
          
          <main>
            {/*cooking the routes so that the right page loads when the nav buttons are clicked*/}
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="moneysnap" element={<MoneySnapshot />} />
            <Route path="strattracks" element={<StrategyTracks />} />
            <Route path="simlab" element={<SimulationLab />} />
            <Route path="profile" element={<Profile />} />

            <Route path="/auth" element={<AuthPage />} />
            
            <Route path="/trackdetails" element={<TrackDetail />} />
            <Route path="simstudio" element={<SimulationStudio />} />

          </Routes>
          {/*didnt include the money snapshot page as i want this and profile to be the pages that require auth*/}
          {/*idk i think i should remove homepage from the navbar...unsure */}
          </main>
        </Router>
      </>
    </UserProvider>
  );
}


export default App;