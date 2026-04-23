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
    const bondPerYear = totalBond5 / 5;
    const rentPerYear = totalRent5 / 5;
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
                                    <p>Year {year}</p>

                                    <div className="dual-bars">
                                        <div 
                                        className="bar rent-bar"
                                        style={{ height: barHeight(rentPerYear) }}
                                        ></div>

                                        <div 
                                        className="bar bond-bar"
                                        style={{ height: barHeight(bondPerYear) }}
                                        ></div>
                                    </div>

                                    <div className="bar-labels">
                                        <span>Rent</span>
                                        <span>Bond</span>
                                    </div>
                                </div>
                            ))}

                            <div className="verdict-box">
                                <h3>Verdict</h3>
                                <p>{verdict}</p>
                            </div>
                        </div>
                    )}
                    
                </div>

            </div>

            {hasCalculated && !isLoading && (
                <div className="education-box fade-in">
                                <h3>Understanding This Scenario</h3>
                                <p>
                                    In South Africa, buying property is heavily influenced by the prime lending rate, 
                                    which affects your monthly bond repayment. When interest rates rise, buying becomes 
                                    more expensive; when they fall, buying becomes more attractive.
                                </p>

                                <p>
                                    Renting offers flexibility and lower upfront costs, but you don’t build equity. 
                                    Buying requires a deposit, transfer costs, and bond registration fees, but it can 
                                    become cheaper over time as rent increases annually.
                                </p>

                                <h4>From a South African Lens...?</h4>
                                <ul>
                                    <li>Prime lending rate in SA typically ranges between 7%–11% depending on the year.</li>
                                    <li>Transfer duty applies to properties above R1.1 million.</li>
                                    <li>Bond registration and attorney fees can add 5%–8% to the upfront cost.</li>
                                    <li>Rent in major cities like Johannesburg and Cape Town increases by 6%–10% annually.</li>
                                </ul>

                                <h4>What This Means For You?</h4>
                                <p>
                                    If your rent is rising faster than your income, buying may become cheaper sooner. 
                                    If interest rates are high or you don’t have a deposit, renting may be the safer 
                                    short‑term option. This studio helps you compare these trade‑offs over a 5‑year horizon.
                                </p>
                            </div>

            )}

            <div className="explainer-tiles fade-in">
            <div className="explainer-tile">
                <h4>What is a Bond?</h4>
                <p>
                A home loan repaid monthly over 20–30 years. Your repayment depends on the 
                interest rate set by SA banks.
                </p>
            </div>

            <div className="explainer-tile">
                <h4>Why Interest Rate Matters</h4>
                <p>
                Higher interest rates increase your monthly repayment. When rates drop, buying 
                becomes more affordable.
                </p>
            </div>

            <div className="explainer-tile">
                <h4>Renting vs Buying</h4>
                <p>
                Renting offers flexibility and lower upfront costs, while buying builds equity 
                but requires a deposit and legal fees.
                </p>
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