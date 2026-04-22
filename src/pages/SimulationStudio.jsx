//obvious? simulation studio page. each page needs a navbar yeahh
//needs user details and relevant buttons
//css
import "../styles/simstudio.css";

//react
import { Link } from "react-router-dom";

//other stuffs


function SimulationStudio() {
    //all functions in react start with return, idk why yet
    return (
        <div className="simstudio-page">

            <h1 className="simstudio-title"> Property VS Renting Studio</h1>

            <div className="simstudio-layout">

                {/*inputs on the left*/}
                <div className="inputs-container">
                    <h2> Inputs</h2>

                        {/*monthly salary*/}
                    <div className="input-group">
                        <label> Monthly Salary: </label>
                        <input type="range" min="0" max="100000" />
                        <p className="input-value"> R25 000</p>
                    </div>

                    {/*rent*/}
                    <div className="input-group">
                        <label> Monthly Rent: </label>
                        <input type="range" min="0" max="20000" />
                        <p className="input-value"> R8 000</p>
                    </div>

                    {/*property price*/}
                    <div className="input-group">
                        <label> Property Price: </label>
                        <input type="range" min="0" max="2000000" />
                        <p className="input-value"> R950 000</p>
                    </div>

                    {/*deposit...is it for proerty? i think so*/}
                    <div className="input-group">
                        <label> Property Deposit: </label>
                        <input type="range" min="0" max="200000" />
                        <p className="input-value"> R100 000</p>
                    </div>

                    {/*interest rate*/}
                    <div className="input-group">
                        <label> Interest Rate: </label>
                        <input type="range" min="0" max="20" />
                        <p className="input-value"> 7%</p>
                    </div>

                </div>

                {/*other side, outputs*/}
                <div className="outputs-container">
                    <h2> Outputs</h2>

                    <div className="output-bar">
                        <p> Year 1</p>
                        <div className="bar-placeholder"></div>
                    </div>

                    <div className="output-bar">
                        <p> Year 2</p>
                        <div className="bar-placeholder"></div>
                    </div>

                    <div className="output-bar">
                        <p> Year 3</p>
                        <div className="bar-placeholder"></div>
                    </div>

                    <div className="output-bar">
                        <p> Year 4</p>
                        <div className="bar-placeholder"></div>
                    </div>

                    <div className="output-bar">
                        <p> Year 5</p>
                        <div className="bar-placeholder"></div>
                    </div>

                    <div className="verdict-box">
                        <h3> Verdict?</h3>
                        <p>Buying a house becomes cheaper after Year 4</p>
                    </div>
                </div>

            </div>

            <div className="simstudio-btns">
                <Link to="/simlab" className="btn-too"> Try Another Simulation</Link>
                <button className="btn-wan"> Save Scenario</button>
            </div>
            

        </div>  
    );
    
}

//exporting so other files can access
export default SimulationStudio;