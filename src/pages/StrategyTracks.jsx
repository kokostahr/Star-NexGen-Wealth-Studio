//Track page theat'll hold the infor for each strategy trach
//css
import "../styles/strategytracks.css";

//react stuff
import { Link } from "react-router-dom";

//other stuffs ig

function StrategyTrack() {
    //all functions in react start with return, idk why yet
    return (
        <div className="overview-page">

            <header className="overview-header">
                <h1>Choose Your Financial Journey</h1>
                <p>Select a guided track tailored to your goals and lifestyle.</p>
            </header>

            {/*display grid of the different tracks*/}
            <section className="overview-section">
                <div className="track-grid">

                    {/*track wan */}
                    <div className="track-card">
                        <h2>First Property Path</h2>
                        <p>
                        A guided journey designed for young professionals preparing to purchase
                        their first home. Understand deposits, affordability, and long‑term
                        planning with confidence.
                        </p>
                        <Link to="/trackdetails/first-property" className="track-btn">Start Track</Link>
                    </div>

                {/*track too*/}
                    <div className="track-card">
                        <h2>Lifestyle & Investing</h2>
                        <p>
                        Learn how to balance spending, saving, and investing without sacrificing
                        the joy of living. Build discipline while still enjoying the things you love.
                        </p>
                       <Link to="/trackdetails/lifestyle-investing" className="track-btn">Start Track</Link>
                    </div>

                {/*track tree*/}
                    <div className="track-card">
                        <h2>Debt‑Free & Stable</h2>
                        <p>
                        A structured plan to help you eliminate debt, build stability, and create
                        long‑term financial resilience.
                        </p>
                        <Link to="/trackdetails/debt-free-stable" className="track-btn">Start Track</Link>
                    </div>
                </div>
            </section>

            {/*recommend smth to the usar*/}
            <section className="recommended-section">
                <div className="recommended-card">
                    <h3>Recommended for You</h3>
                    <p>
                        Based on your current spending habits and goals, NexGen suggests starting with the
                        <strong> Lifestyle & Investing </strong> track.
                    </p>
                </div>
            </section>
        </div>
    );
    
}

//exporting so other files can access
export default StrategyTrack;