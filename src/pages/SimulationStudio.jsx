//obvious? simulation studio page. each page needs a navbar yeahh
//needs user details and relevant buttons
//css
import "../styles/simstudio.css";

//react
import { Link } from "react-router-dom";
import { useState } from "react";

//other stuffs


function SimulationStudio() {
    //now we're adding some real functionality to this static studio T^T
    //STATES for the calculating and loading
    const [hasCalculated, setHasCalculated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
   
    //input
    const [salary, setSalary] = useState(25000);
    const [rent, setRent] = useState(8000);
    const [price, setPrice] = useState(950000);
    const [deposit, setDeposit] = useState(100000);
    const [interest, setInterest] = useState(7);

    //simple calculations T^T
    const loanAmount = price - deposit;
    const interestRateDecimal = interest / 100;
    const monthlyBond = (loanAmount * interestRateDecimal) / 12;
//the total payment over 5 years
    const totalRent5 = rent * 12 * 5;
    const totalBond5 = monthlyBond * 12 * 5;
//the outcome ofc
    const verdict = totalBond5 < totalRent5 ? "Buying becomes cheaper over 5 years." :
        "Renting remains cheaper over 5 years";
    //bar scaling
    const maxCost = Math.max(totalRent5 / 5, totalBond5 / 5);

    function barHeight(cost) {
        return `${(cost / maxCost) * 100}%`;
    }

    //function to calculate the usars inputs
    function handleCalculate() {
        setIsLoading(true);
        setHasCalculated(false);

        // Fake loading delay for UX polish
        setTimeout(() => {
            setIsLoading(false);
            setHasCalculated(true);
        }, 1200);
    }


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
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            value={salary}
                            onChange={(e) => setSalary(Number(e.target.value))}/>
                        <p className="input-value"> R {salary.toLocaleString()} </p>
                    </div>

                    {/*rent*/}
                    <div className="input-group">
                        <label> Monthly Rent: </label>
                        <input
                            type="range"
                            min="0"
                            max="20000"
                            value={rent}
                            onChange={(e) => setRent(Number(e.target.value))}/>
                        <p className="input-value"> R {rent.toLocaleString()} </p>
                    </div>

                    {/*property price*/}
                    <div className="input-group">
                        <label> Property Price: </label>
                        <input
                            type="range"
                            min="0"
                            max="2000000"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}/>
                        <p className="input-value"> R {price.toLocaleString()} </p>
                    </div>

                    {/*deposit...is it for proerty? i think so*/}
                    <div className="input-group">
                        <label> Property Deposit: </label>
                        <input
                            type="range"
                            min="0"
                            max="200000"
                            value={deposit}
                            onChange={(e) => setDeposit(Number(e.target.value))}/>
                        <p className="input-value"> R {deposit.toLocaleString()} </p>
                    </div>

                    {/*interest rate*/}
                    <div className="input-group">
                        <label> Interest Rate: </label>
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={interest}
                            onChange={(e) => setInterest(Number(e.target.value))}/>
                        <p className="input-value"> {interest}% </p>
                    </div>

                    <button className="btn-wan calculate-btn"
                        onClick={handleCalculate}
                        >
                        Calculate </button>
                </div>

                {/*other side, outputs*/}
                <div className="outputs-container">
                    <h2> Outputs</h2>

                    {isLoading && (
                        <div className="loading-box">
                            <p>Calculating your scenario…</p>
                        </div>
                        )}

                        {hasCalculated && !isLoading && (
                        <div className="outputs-container fade-in">
                            {[1, 2, 3, 4, 5].map((year) => (
                                <div className="output-bar" key={year}>
                                    <p> Year {year} </p>
                                    <div className="bar-placeholder" style={{
                                        height: barHeight(
                                            year <= 5 ? totalBond5 / 5:0
                                        ),}}>
                                    </div>
                                </div>
                            ))}

                            <div className="verdict-box">
                                <h3> Verdict</h3>
                                <p> {verdict} </p>
                            </div>
                        </div>
                    )}
                    
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