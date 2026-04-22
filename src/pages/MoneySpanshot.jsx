//obvious? money spanshot. each page needs a navbar yeahh 
//css
import "../styles/moneysnapshot.css";

//react stuff

//extra data from js 

function MoneySnapshot() {
    //all functions in react start with return, idk why yet
    return(
        <div className="snapshot-page">
            <h1 className="snapshot-title"> Money Snapshot Dashboard </h1>

            {/*trying to follow my wireframe*. top section with the 3 boxes*/}
            <div className="snapshot-row top-row">
                {/*first; month at a glance*/}
                <section className="snapshot-card">
                    <h2> Your Month at a Glance </h2>
                    <div className="bargraph-placeholder">
                        <div className="bar income-bar"> Income</div>
                        <div className="bar expense-bar"> Expenses </div>
                    </div>
                </section>

                {/*spending breakdown*/}
                <section className="snapshot-card">
                    <h2> Spending Breakdown</h2>
                    <div className="breakdown-grid">
                    <div className="breakdown-item"> Housing</div>
                        <div className="breakdown-item"> Transport</div>
                        <div className="breakdown-item"> Debt</div>
                        <div className="breakdown-item"> Subscriptions</div>
                        <div className="breakdown-item"> Groceries</div>
                        <div className="breakdown-item"> Savings</div> 
                    </div>
                </section>

                {/*key finances...why did i make this page so elaborate 😭*/}
                <section className="snapshot-card">
                    <h2> Key Finances </h2>
                    <div className="key-finances">
                        <div className="finance-box">
                            {/*some fake values for now ☠️*/}
                            <p>Take Home Pay</p>
                            <strong>R 18,000</strong>
                            </div>
                            <div className="finance-box">
                            <p>SARS Tax Estimate</p>
                            <strong>R 3,200</strong>
                            </div>
                            <div className="finance-box">
                            <p>Monthly Surplus/Deficit</p>
                            <strong>+ R 1,500</strong>
                        </div>
                    </div>
                </section>
            </div>

            

            {/*bottom part, goals + insights*/}
            <div className="snapshot-row bottom-row">
                {/*the goals*/}
                <section className="snapshot-card">
                    <h2> Your Goals</h2>

                    <div className="goal">
                        <p>Emergency Fund: R2500 / R15000</p>
                        <div className="goal-bar">
                            <div className="goal-fill" style={{ width: "16%" }}></div>
                        </div>
                    </div>

                     <div className="goal">
                        <p>Deposit Savings: R1000 / R5000</p>
                        <div className="goal-bar">
                            <div className="goal-fill" style={{ width: "20%" }}></div>
                        </div>
                    </div>

                    <div className="goal">
                        <p>Debt Repayment: R4000 / R6000</p>
                        <div className="goal-bar">
                            <div className="goal-fill" style={{ width: "66%" }}></div>
                        </div>
                    </div>
                </section>

                {/*the insidhts*/}
                <section className="snapshot-card">
                    <h2> Insights</h2>

                    <ul className="insights-list">
                        <li>
                            You’re spending 38% of your income on transport.
                        </li>
                        <li>
                            Your emergency fund is way lower than recommended levels.
                        </li>
                        <li>
                            Consider reducing subscriptions to increase savings?
                        </li>
                    </ul>
                </section>

            </div>

        </div>
        
    );
}

//exporting so other files can access
export default MoneySnapshot;