//obvious? Detailed page of the different tracks. info needs to change dynamically
//  gonna add dynamic data for each track using ID from url, using a data js file. later tho
//css
import "../styles/trackdetails.css";

//react stuff
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

//any other stuff ig


function TrackDetail() {
    //user context
    const { userIncome } = useContext(UserContext);


    //variables for milestones
    const [year1, setYear1] = useState({ emergency: "Not started", budget: "Not started" });
    const [year2, setYear2] = useState({ depositStart: "Not started", credit: "Not started" });
    const [year3, setYear3] = useState({ depositHalf: "Not started", debt: "Not started" });
    const [year4, setYear4] = useState({ depositFull: "Not started", preapproval: "Not started" });
    const [year5, setYear5] = useState({ offer: "Not started", legal: "Not started" });

    //dynamic recommanedation logic
    function getRecommendation() {
        if (year1.emergency === "Not started") {
            return "Start with an emergency fund of at least R10 000 before saving for a deposit.";
        }
        if (year2.credit === "Not started") {
            return "Improving your credit score can reduce your bond interest rate in South Africa.";
        }
        if (year3.debt !== "Done") {
            return "Reducing debt improves your affordability score when applying for a bond.";
        }
        if (year4.depositFull !== "Done") {
            return "Aim to reach your full deposit goal to reduce monthly repayments.";
        }
        return "You're on track! Continue preparing for transfer and legal fees in Year 5.";
  }

    return (
        <div className="trackdetails-page">

            {/*just gonna use the static data from my wireframe for now*/}
            <h1 className="trackdetails-title">First Property Path</h1>
            <p className="trackdetails-comment"> Your 5-year roadmap</p>

            <div className="trackdetails-layout">
                {/*left side*/}
                <div className="years-container">
                    {/*year wan*/}
                    <div className="year-column">
                        <h2> Year 1</h2>

                        <div className="year-section">
                            <h3> Milestones </h3>
                            <ul>
                                <li>
                                    Emergency Fund  
                                    <select value={year1.emergency} onChange={(e) => setYear1({ ...year1, emergency: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select>
                                </li>
                                <li>
                                    Stabilise Budget  
                                    <select value={year1.budget} onChange={(e) => setYear1({ ...year1, budget: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                            </ul>
                        </div>

                         <div className="year-section">
                            <h3>Action Steps</h3>
                            <ul>
                                <li>Track monthly expenses</li>
                                <li>Cut unnecessary spending</li>
                            </ul>
                            </div>
                        </div>

                    {/*year too*/}
                    <div className="year-column">
                        <h2> Year 2</h2>

                        <div className="year-section">
                            <h3> Milestones </h3>
                            <ul>
                                <li>
                                    Start Deposit Savings  
                                    <select value={year2.depositStart} onChange={(e) => setYear2({ ...year2, depositStart: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                                <li>
                                    Improve Credit Score  
                                    <select value={year2.credit} onChange={(e) => setYear2({ ...year2, credit: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>Pay bills on time</li>
                                <li>Reduce credit utilisation</li>
                            </ul>
                        </div>
                    </div>

                    {/*year tree*/}
                    <div className="year-column">
                        <h2> Year 3</h2>

                        <div className="year-section">
                            <h3> Milestones </h3>
                            <ul>
                                <li>
                                    Reach 50% Deposit  
                                    <select value={year3.depositHalf} onChange={(e) => setYear3({ ...year3, depositHalf: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                                <li>
                                    Reduce Debt  
                                    <select value={year3.debt} onChange={(e) => setYear3({ ...year3, debt: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>Increase monthly savings</li>
                                <li>Pay off high-interest debt</li>
                            </ul>
                        </div>
                    </div>

                    {/*year for*/}
                    <div className="year-column">
                        <h2> Year 4</h2>

                        <div className="year-section">
                            <h3> Milestones </h3>
                            <ul>
                                <li>
                                    Reach Full Deposit  
                                    <select value={year4.depositFull} onChange={(e) => setYear4({ ...year4, depositFull: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                                <li>
                                    Bond Pre‑Approval  
                                    <select value={year4.preapproval} onChange={(e) => setYear4({ ...year4, preapproval: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>Compare banks</li>
                                <li>Check affordability</li>
                            </ul>
                        </div>
                    </div>

                    {/*year fiove*/}
                    <div className="year-column">
                        <h2> Year 5</h2>

                        <div className="year-section">
                            <h3> Milestones </h3>
                            <ul>
                                <li>
                                    Make an Offer  
                                    <select value={year5.offer} onChange={(e) => setYear5({ ...year5, offer: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                                <li>
                                    Prepare Legal Fees  
                                    <select value={year5.legal} onChange={(e) => setYear5({ ...year5, legal: e.target.value })}>
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Done</option>
                                    </select> 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>Find conveyancer</li>
                                <li>Review transfer costs</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/*right side with the focuse stuff*/}
                <div className="focus-container">

                    <div className="focus-box">
                        <h3> This Year's Focus</h3>
                        <p> Build financial stability and prepare for long-term affordability</p>
                        <p>Your current income: R {userIncome.toLocaleString()}</p>
                    </div>

                    <div className="focus-box">
                        <h3> Your Next Steps..?</h3>
                        <p> {getRecommendation()}</p>
                    </div>

                    <div className="focus-box">
                        <h3> Why This Matters?</h3>
                        <p>  South African banks assess affordability, credit score, and deposit size when approving a bond. 
                            Strong financial habits now reduce your long-term repayment burden.
                        </p>
                    </div>
                    
                </div>

                {/*a section that'll teach the usar smth ...new hopefully? will add dynamic and changing tips later*/}
                <div className="learn-section">
                    <h2>Learn: How to Approach Your First 5 Years</h2>
                    <p>
                    Buying property in South Africa requires patience, planning, and a strong financial foundation. 
                    Your first five years should focus on building stability, reducing debt, and saving consistently.
                    </p>
                    <p>
                    Transfer duty applies to properties above R1.1 million, and bond registration fees can add 
                    5–8% to your upfront costs. Planning early helps you avoid financial shocks later.
                    </p>
                    <p>
                    A larger deposit reduces your monthly repayment and improves your chances of securing a 
                    favourable interest rate from SA banks.
                    </p>
                </div>

                {/*explainery tiles*/}
                <div className="explainer-tiles">
                    <div className="explainer-tile">
                        <h4>Emergency Fund</h4>
                        <p>A safety buffer covering 3–6 months of expenses.</p>
                    </div>

                    <div className="explainer-tile">
                        <h4>Deposit</h4>
                        <p>A larger deposit reduces your monthly bond repayment.</p>
                    </div>

                    <div className="explainer-tile">
                        <h4>Transfer Duty</h4>
                        <p>A tax paid when buying property above R1.1 million.</p>
                    </div>

                    <div className="explainer-tile">
                        <h4>Bond Registration Fees</h4>
                        <p>Legal fees required to register your home loan.</p>
                    </div>
                </div>

            </div>

            {/*buttons*/}
            <div className="trackdetails-buttons">
                <Link to="/strattracks" className="btn-too"> Return to Tracks</Link>
                <button className="btn-wan"> Save Track Progress</button>
            </div>

        </div>
    );
    
}

//exporting so other files can access
export default TrackDetail;