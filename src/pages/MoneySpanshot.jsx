//obvious? money spanshot. each page needs a navbar yeahh 
//css
import "../styles/moneysnapshot.css";

//react stuff
import { useState } from "react";
import { useContext } from "react";

//anything else
import { UserContext } from "../context/UserContext";

function MoneySnapshot() {
    //context related for income
    const { userIncome, setUserIncome } = useContext(UserContext);

    //input states
    const [income, setIncome] = useState(userIncome);
    const [expenses, setExpenses] = useState(15000);
    const [debt, setDebt] = useState(3000);
    const [savings, setSavings] = useState(2000)
    
    //calculations 
    const netCashFlow = income - expenses;
    const savingsRate = ((savings / income) * 100).toFixed(1);
    const debtToIncome = ((debt / income) * 100).toFixed(1);

    //verdicts
    let verdict = "";
    let verdictClass = "";

    if (netCashFlow > 0) {
        verdict = "You have a monthly surplus. Great job!";
        verdictClass = "positive";
    } else if (netCashFlow === 0) {
        verdict = "You're breaking even. Consider reducing variable expenses.";
        verdictClass = "neutral";
    } else {
        verdict = "You're in a deficit. Review your spending or increase income.";
        verdictClass = "negative";
    }


    return(
        <div className="snapshot-page">
            <h1 className="snapshot-title"> Money Snapshot Dashboard </h1>

            {/*inputs*/}
            <div className="snapshot-inputs">
                <h2>Your Inputs</h2>

                <div className="input-group">
                    <label>Monthly Income</label>
                    <input type="range" min="0" max="60000" value={income}
                        onChange={(e) => setIncome(Number(e.target.value))} />
                    <p>R {income.toLocaleString()}</p>
                </div>

                <div className="input-group">
                    <label>Monthly Expenses</label>
                    <input type="range" min="0" max="60000" value={expenses}
                        onChange={(e) => setExpenses(Number(e.target.value))} />
                    <p>R {expenses.toLocaleString()}</p>
                </div>

                <div className="input-group">
                    <label>Debt Repayments</label>
                    <input type="range" min="0" max="20000" value={debt}
                        onChange={(e) => setDebt(Number(e.target.value))} />
                    <p>R {debt.toLocaleString()}</p>
                </div>

                <div className="input-group">
                    <label>Monthly Savings</label>
                    <input type="range" min="0" max="20000" value={savings}
                        onChange={(e) => setSavings(Number(e.target.value))} />
                    <p>R {savings.toLocaleString()}</p>
                </div>
            </div>

            <button 
                className="save-btn"
                onClick={() => setUserIncome(income)}
                >
                Save to Profile
            </button>
            {userIncome === income && (
                <p className="saved-msg">Saved!</p>
            )}


            <div className="snapshot-row top-row">
                {/*first; month at a glance*/}
                <section className="snapshot-card">
                    <h2> Your Month at a Glance </h2>
                     <div className="glance-values">
                        <p>Income: <strong>R {income.toLocaleString()}</strong></p>
                        <p>Expenses: <strong>R {expenses.toLocaleString()}</strong></p>
                        <p className={`verdict ${verdictClass}`}>
                        Net Cash Flow: R {netCashFlow.toLocaleString()}
                        </p>
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
                            <p>Savings Rate</p>
                            <strong>{savingsRate}%</strong>
                        </div>

                        <div className="finance-box">
                            <p>Debt-to-Income</p>
                            <strong>{debtToIncome}%</strong>
                        </div>

                        <div className="finance-box">
                            <p>Net Cash Flow</p>
                            <strong>R {netCashFlow.toLocaleString()}</strong>
                        </div>
                    </div>
                </section>
            </div>

              {/* goals + insights*/}
            <div className="snapshot-row bottom-row">
                
                {/*the insidhts*/}
                <section className="snapshot-card">
                    <h2> Insights</h2>

                    <ul className="insights-list">
                        <li>
                            Your savings rate is {savingsRate}%. SA professionals aim for 10–20%.
                        </li>
                        <li>
                            Debt-to-income ratio is {debtToIncome}%. Banks prefer below 40%.
                        </li>
                        <li>{verdict}</li>
                    </ul>
                </section>
                
                
                {/*the goals*/}
                <section className="snapshot-card">
                    <h2> Your Goals</h2>

                    <p>Emergency Fund: 3–6 months of expenses recommended.</p>
                    <p>Reduce debt to improve affordability.</p>
                    <p>Increase savings rate over time.</p>
                </section>
            </div>

            {/*teach the usar smth smth*/}
            <div className="learn-section">
                <h2>Learn: Understanding Your Money Snapshot</h2>
                <p>
                Your financial snapshot helps you understand how much money you keep after expenses,
                how much you save, and how much debt you carry. These numbers influence your ability
                to invest, buy property, or build long-term wealth.
                </p>
                <p>
                In South Africa, major fixed costs include transport, electricity, medical aid,
                and housing. Tracking these helps you stay in control of your budget.
                </p>
                <p>
                A healthy financial foundation starts with a surplus, manageable debt, and consistent savings.
                </p>
            </div>

            {/*explainery cardz*/}
            <div className="explainer-tiles">
                <div className="explainer-tile">
                    <h4>Emergency Fund</h4>
                    <p>A buffer covering 3–6 months of expenses.</p>
                    </div>
                    <div className="explainer-tile">
                    <h4>Net Cash Flow</h4>
                    <p>Your leftover money after expenses.</p>
                    </div>
                    <div className="explainer-tile">
                    <h4>Debt-to-Income</h4>
                    <p>How much of your income goes to debt.</p>
                </div>
            </div>
          
        </div>

    );
}

//exporting so other files can access
export default MoneySnapshot;