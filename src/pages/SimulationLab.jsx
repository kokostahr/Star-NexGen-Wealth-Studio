//obvious? simulation lab page. each page needs a navbar yeahh
//literally a copypaste of the strat track layout........

//css
import "../styles/overviewpages.css";

//react thingy
import { Link } from "react-router-dom";

//other stuff


function SimulationLab() {
    //all functions in react start with return, idk why yet
    return (
        <div className=" overview-page simlab-page">

            <h1 className="overview-title"> Explore 'What-If' Scenarios</h1>

            <div className="overview-row">

                {/*simulation wan*/}
                <section className="overview-card">
                    <h2> Own Property VS Renting</h2>
                    <p className="overview-desc">
                        Explore and compare the long-term financial outcomes of buying a home versus renting.
                        This simulation will help you understand how each path can shape your wealth and future
                        opportunities overtime, enabling you to make decisions that align with your current goals.
                    </p>
                    <Link to="/simstudio" className="overview-btn"> Start Simulation!</Link>
                </section>

                {/*simulation wan*/}
                <section className="overview-card">
                    <h2> Lifestyle and Investing</h2>
                    <p className="overview-desc">
                        Uncover how everyday lifestyle choices influence your investment growth overtime. This simulation
                        helps you explore different spending habits and saving patterns, which can shape your finacial future.
                    </p>
                    <Link to="/simstudio" className="overview-btn"> Start Simulation!</Link>
                </section>

                {/*simulation tree*/}
                <section className="overview-card">
                    <h2> Local VS Offshore Investing</h2>
                    <p className="overview-desc">
                        Examine the impact of global investment versus local investment strategies on long-term gains. This simulation
                        aids in broadening your perspective on the risks and opportunities involved with investing, and empowers you to
                        make informed decisions.
                    </p>
                    <Link to="/simstudio" className="overview-btn"> Start Simulation!</Link>
                </section>
            </div>

            {/*another recoomend box*/}
            <div className="overview-recommended">
                <h3> Recommended for you!</h3>
                <p>
                    Based on your spending habits and goals, NexGen suggests trying the
                    <strong> Property VS Renting </strong> simulation first.
                </p>
            </div>
        </div>
    );
}

//exporting so other files can access
export default SimulationLab;