//obvious? simulation lab page. each page needs a navbar yeahh
//css
import "../styles/simulationlab.css";

//react thingy
import { Link } from "react-router-dom";

//other stuff


function SimulationLab() {
    return (
        <div className="simlab-page">

            <header className="simlab-header">
                <h1>Explore “What‑If” Scenarios</h1>
                <p>Run simulations to understand how different choices shape your financial future.</p>
            </header>

            <section className="simlab-section">
                <div className="simlab-grid">

                    {/*simulation wan*/}
                    <div className="sim-card">
                        <h2>Own Property vs Renting</h2>
                        <p>
                        Compare long‑term financial outcomes between buying a home and renting.
                        Understand affordability, equity growth, and long‑term wealth impact.
                        </p>
                        <Link to="/simstudio/property-vs-rent" className="sim-btn">Run Simulation</Link>
                    </div>

                    {/*simula too*/}
                    <div className="sim-card">
                        <h2>Lifestyle & Investing</h2>
                        <p>
                        Explore how lifestyle choices influence your investment growth over time.
                        See how spending habits affect long‑term wealth.
                        </p>
                        <Link to="/simstudio/lifestyle-investing" className="sim-btn">Run Simulation</Link>
                    </div>

                    {/*sim tree*/}
                    <div className="sim-card">
                        <h2>Local vs Offshore Investing</h2>
                        <p>
                        Compare global vs local investment strategies. Understand risk, returns,
                        and how diversification shapes long‑term outcomes.
                        </p>
                        <Link to="/simstudio/local-vs-offshore" className="sim-btn">Run Simulation</Link>
                    </div>
                </div>
            </section>

            {/*another recomend section*/}
            <section className="simlab-recommended">
                <h3>Recommended Simulation</h3>
                <p>
                Based on your spending habits and goals, NexGen suggests starting with the
                <strong> Property vs Renting </strong> simulation.
                </p>
            </section>
        </div>
    );
}
//exporting so other files can access
export default SimulationLab;