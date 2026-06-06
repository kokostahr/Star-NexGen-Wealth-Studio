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

            {/*added a page header to look...more*/}
            <header className="snapshot-header">
                <h1>Money Snapshot Dashboard</h1>
                <p>Your personalised monthly financial overview</p>
            </header>

            {/*inputs*/}
            <section className="snapshot-section">
                <div className="section-inner">
                    <h2 className="section-title">Your Inputs</h2>
                    <div className="inputs-grid">
                        {/* income */}
                        <div className="input-card">
                            <label>Monthly Income</label>
                            <input
                            type="number"
                            min="0"
                            max="60000"
                            value={income}
                            onChange={(e) => setIncome(Number(e.target.value))}
                            className="input-field"
                            />
                            <p className="input-value">R {income.toLocaleString()}</p>
                        </div>

                        {/*expenses */}
                        <div className="input-card">
                            <label>Monthly Expenses</label>
                            <input
                            type="number"
                            min="0"
                            max="60000"
                            value={expenses}
                            onChange={(e) => setExpenses(Number(e.target.value))}
                            className="input-field"
                            />
                            <p className="input-value">R {expenses.toLocaleString()}</p>
                        </div>

                        {/*debts*/}
                        <div className="input-card">
                            <label>Debt Repayments</label>
                            <input
                            type="number"
                            min="0"
                            max="20000"
                            value={debt}
                            onChange={(e) => setDebt(Number(e.target.value))}
                            className="input-field"
                            />
                            <p className="input-value">R {debt.toLocaleString()}</p>
                        </div>

                        {/* saving*/}
                        <div className="input-card">
                            <label>Monthly Savings</label>
                            <input
                            type="number"
                            min="0"
                            max="20000"
                            value={savings}
                            onChange={(e) => setSavings(Number(e.target.value))}
                            className="input-field"
                            />
                            <p className="input-value">R {savings.toLocaleString()}</p>
                        </div>
                    </div>

                    <button className="btn-primary save-btn" onClick={() => setUserIncome(income)}>
                    Save to Profile?
                    </button>
                    {userIncome === income && <p className="saved-msg">Saved!</p>}
                </div>
            </section>

            {/*the snapshot summary*/}
            <section className="snapshot-section">
                <div className="section-inner">
                    <h2 className="section-title">Your Monthly Overview</h2>
                    <div className="summary-grid">
                        {/*first; month at a glance*/}
                        <div className="summary-card">
                            <h3>Your Month at a Glance</h3>
                            <div className="summary-values">
                                <p>Income: <strong>R {income.toLocaleString()}</strong></p>
                                <p>Expenses: <strong>R {expenses.toLocaleString()}</strong></p>
                                <p className={`verdict ${verdictClass}`}>
                                    Net Cash Flow: R {netCashFlow.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {/*key finances...why did i make this page so elaborate 😭*/}
                        <div className="summary-card">
                            <h3>Key Finances</h3>
                            <div className="key-finances">
                                <div className="finance-box">
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
                        </div>
                    </div>
                </div>
                </section>

            {/*the spending breakdawn*/}
            <section className="snapshot-section">
                <div className="section-inner">
                    <h2 className="section-title">Spending Breakdown</h2>
                    <div className="breakdown-grid">
                        <div className="breakdown-item">Housing</div>
                        <div className="breakdown-item">Transport</div>
                        <div className="breakdown-item">Debt</div>
                        <div className="breakdown-item">Subscriptions</div>
                        <div className="breakdown-item">Groceries</div>
                        <div className="breakdown-item">Savings</div>
                    </div>
                </div>
            </section>

            {/* goals + insights*/}
            <section className="snapshot-section">
                <div className="section-inner">
                    <h2 className="section-title">Insights & Goals</h2>
                    <div className="insights-grid">

                        {/* Insights */}
                        <div className="insights-card">
                            <h3>Insights</h3>
                            <ul>
                            <li>Your savings rate is {savingsRate}%. SA professionals aim for 10–20%.</li>
                            <li>Debt-to-income ratio is {debtToIncome}%. Banks prefer below 40%.</li>
                            <li>{verdict}</li>
                            </ul>
                        </div>
                        {/* Goals */}
                        <div className="insights-card">
                            <h3>Your Goals</h3>
                            <p>Emergency Fund: 3–6 months of expenses recommended.</p>
                            <p>Reduce debt to improve affordability.</p>
                            <p>Increase savings rate over time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*teach the usar smth smth*/}
           <section className="snapshot-section">
                <div className="section-inner learn-card">
                    <h2 className="section-title">Learn: Understanding Your Money Snapshot</h2>
                    <p>
                    Your financial snapshot helps you understand how much money you keep after expenses,
                    how much you save, and how much debt you carry.
                    </p>
                    <p>
                    In South Africa, major fixed costs include transport, electricity, medical aid,
                    and housing.
                    </p>
                    <p>
                    A healthy financial foundation starts with a surplus, manageable debt, and consistent savings.
                    </p>
                </div>
            </section>

            {/*explainery cardz*/}
            <section className="snapshot-section">
                <div className="section-inner explainer-grid">

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
            </section>
          
        </div>
    );
}

//exporting so other files can access
export default MoneySnapshot;