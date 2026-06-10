//obvious? money spanshot. each page needs a navbar yeahh 
//css
import "../styles/moneysnapshot.css";

//react stuff
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

//anything else


function MoneySnapshot() {
    //context related for income
    const { userIncome, setUserIncome } = useContext(UserContext);
    const { isLoggedIn } = useContext(UserContext);

    //input states with localStorage laod
    const [grossIncome, setGrossIncome] = useState(0);
    const [housing, setHousing] = useState(0);
    const [mobility, setMobility] = useState(0);
    const [lifestyle, setLifestyle] = useState(0);
    const [debt, setDebt] = useState(0);
    const [savings, setSavings] = useState(0);
    const [showSavedMsg, setShowSavedMsg] = useState(false);

    //load the saved monisnapshot
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("money-snapshot"));
        if (saved) {
            setGrossIncome(saved.grossIncome);
            setHousing(saved.housing);
            setMobility(saved.mobility);
            setLifestyle(saved.lifestyle);
            setDebt(saved.debt);
            setSavings(saved.savings);
        }
    }, []);

    //save the monisnap autocmatically
    useEffect(() => {
        localStorage.setItem(
        "money-snapshot",
        JSON.stringify({
            grossIncome,
            housing,
            mobility,
            lifestyle,
            debt,
            savings,
        })
        );
    }, [grossIncome, housing, mobility, lifestyle, debt, savings]);

    //simpletax calculation
    function calculateNetIncome(gross) {
        if (gross <= 0) return 0;

        let tax = 0;

        if (gross <= 237100) tax = gross * 0.18;
        else if (gross <= 370500) tax = 42678 + (gross - 237100) * 0.26;
        else if (gross <= 512800) tax = 77362 + (gross - 370500) * 0.31;
        else if (gross <= 673000) tax = 121475 + (gross - 512800) * 0.36;
        else if (gross <= 857900) tax = 179147 + (gross - 673000) * 0.39;
        else if (gross <= 1817000) tax = 251258 + (gross - 857900) * 0.41;
        else tax = 644489 + (gross - 1817000) * 0.45;

        const monthlyTax = tax / 12;
        return Math.round(gross - monthlyTax);
    }

    const netIncome = calculateNetIncome(grossIncome);
    
    //calculations 
    const totalExpenses = housing + mobility + lifestyle + debt;
    const disposableIncome = netIncome - totalExpenses;

    const savingsRate = netIncome > 0 ? ((savings / netIncome) * 100).toFixed(1) : 0;
    const debtToIncome = netIncome > 0 ? ((debt / netIncome) * 100).toFixed(1) : 0;
    const lifestylePercent = netIncome > 0 ? ((lifestyle / netIncome) * 100).toFixed(1) : 0;

    //insights
    let insights = [];

    if (lifestylePercent > 40) {
        insights.push(`You’re allocating ${lifestylePercent}% to lifestyle — above typical for your income band.`);
    }
    if (debtToIncome > 35) {
        insights.push("Your debt-to-income ratio is high. Banks prefer below 35–40%.");
    }
    if (savingsRate < 10) {
        insights.push("Your savings rate is low. Aim for 10–20% for long-term stability.");
    }
    if (disposableIncome < 0) {
        insights.push("Your expenses exceed your net income. Review your spending categories.");
    }
    if (insights.length === 0) {
        insights.push("Your financial position looks balanced. Keep building good habits.");
    }

    //bar chart percentages
    const totalForChart = housing + mobility + lifestyle + debt + savings;
    const housingPct = totalForChart ? (housing / totalForChart) * 100 : 0;
    const mobilityPct = totalForChart ? (mobility / totalForChart) * 100 : 0;
    const lifestylePct2 = totalForChart ? (lifestyle / totalForChart) * 100 : 0;
    const debtPct = totalForChart ? (debt / totalForChart) * 100 : 0;
    const savingsPct = totalForChart ? (savings / totalForChart) * 100 : 0;

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
                        {/*gross income */}
                        <div className="input-card">
                            <label>Gross Monthly Income</label>
                            <input
                                type="number"
                                min="0"
                                value={grossIncome}
                                onChange={(e) => setGrossIncome(Number(e.target.value))}
                            />
                            <p className="input-value">R {grossIncome.toLocaleString()}</p>
                        </div>

                        {/* Housing */}
                        <div className="input-card">
                            <label>Housing</label>
                            <input
                                type="number"
                                min="0"
                                value={housing}
                                onChange={(e) => setHousing(Number(e.target.value))}
                            />
                        </div>

                        {/* Mobility */}
                        <div className="input-card">
                            <label>Mobility</label>
                            <input
                                type="number"
                                min="0"
                                value={mobility}
                                onChange={(e) => setMobility(Number(e.target.value))}
                            />
                        </div>

                        {/* Lifestyle */}
                        <div className="input-card">
                            <label>Lifestyle</label>
                            <input
                                type="number"
                                min="0"
                                value={lifestyle}
                                onChange={(e) => setLifestyle(Number(e.target.value))}
                            />
                        </div>

                        {/* Debt */}
                        <div className="input-card">
                            <label>Debt Repayments</label>
                            <input
                                type="number"
                                min="0"
                                value={debt}
                                onChange={(e) => setDebt(Number(e.target.value))}
                            />
                        </div>

                        {/* Savings */}
                        <div className="input-card">
                            <label>Savings</label>
                            <input
                                type="number"
                                min="0"
                                value={savings}
                                onChange={(e) => setSavings(Number(e.target.value))}
                            />
                        </div>
                    </div>

                   <button
                        className="btn-primary save-btn"
                        onClick={() => {
                            setUserIncome(grossIncome);
                            setShowSavedMsg(true);
                            setTimeout(() => setShowSavedMsg(false), 2000);
                        }}
                    >
                        Save Income to Profile
                    </button>

                    {showSavedMsg && (
                        <p className="save-confirm fade-in">Income saved successfully!</p>
                    )}
                </div>
            </section>

            {/*metrics + bar chart stacked*/}
            <section className="snapshot-section">
                <div className="section-inner">

                    <h2 className="section-title">Key Financial Metrics</h2>

                    <div className="metrics-grid">
                        <div className="metric-card">
                            <p>Net Income (after tax)</p>
                            <strong>R {netIncome.toLocaleString()}</strong>
                        </div>

                        <div className="metric-card">
                            <p>Total Expenses</p>
                            <strong>R {totalExpenses.toLocaleString()}</strong>
                        </div>

                        <div className="metric-card">
                            <p>Disposable Income</p>
                            <strong>R {disposableIncome.toLocaleString()}</strong>
                        </div>

                        <div className="metric-card">
                            <p>Savings Rate</p>
                            <strong>{savingsRate}%</strong>
                        </div>

                        <div className="metric-card">
                            <p>Debt-to-Income</p>
                            <strong>{debtToIncome}%</strong>
                        </div>

                        <div className="metric-card">
                            <p>Lifestyle %</p>
                            <strong>{lifestylePercent}%</strong>
                        </div>
                    </div>

                    {/*bar chart*/}
                    <h2 className="section-title" style={{ marginTop: "2rem" }}>Spending Breakdown</h2>

                    <div className="bar-chart-wrapper">

                        <div className="bar-chart">

                            <div className="bar-item">
                                <p>Housing</p>
                                <div className="bar">
                                    <div className="bar-fill gold" style={{ height: `${housingPct}%` }}></div>
                                </div>
                                <span>{housingPct.toFixed(1)}%</span>
                            </div>

                            <div className="bar-item">
                                <p>Mobility</p>
                                <div className="bar">
                                    <div className="bar-fill mint" style={{ height: `${mobilityPct}%` }}></div>
                                </div>
                                <span>{mobilityPct.toFixed(1)}%</span>
                            </div>

                            <div className="bar-item">
                                <p>Lifestyle</p>
                                <div className="bar">
                                    <div className="bar-fill blue" style={{ height: `${lifestylePct2}%` }}></div>
                                </div>
                                <span>{lifestylePct2.toFixed(1)}%</span>
                            </div>

                            <div className="bar-item">
                                <p>Debt</p>
                                <div className="bar">
                                    <div className="bar-fill red" style={{ height: `${debtPct}%` }}></div>
                                </div>
                                <span>{debtPct.toFixed(1)}%</span>
                            </div>

                            <div className="bar-item">
                                <p>Savings</p>
                                <div className="bar">
                                    <div className="bar-fill purple" style={{ height: `${savingsPct}%` }}></div>
                                </div>
                                <span>{savingsPct.toFixed(1)}%</span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/*insights and learn side-bye-side (updating the layout i dont like how it looks)*/}
            <section className="snapshot-section">
                <div className="insights-learn-grid">

                    {/*insights*/}
                    <div className="section-inner insights-card">
                        <h2 className="section-title">Insights</h2>
                        <ul>
                            {insights.map((i, index) => (
                                <li key={index}>{i}</li>
                            ))}
                        </ul>
                    </div>

                    {/*learn*/}
                    <div className="section-inner learn-card">
                        <h2 className="section-title">Learn: Understanding Your Snapshot</h2>
                        <p>Your Money Snapshot helps you understand how your income is allocated across essential categories.</p>
                        <p>In South Africa, major fixed costs include housing, transport, medical aid, and electricity.</p>
                        <p>A strong financial foundation includes a surplus, manageable debt, and consistent savings.</p>
                    </div>

                </div>
            </section>

        </div>
    );
}

//exporting so other files can access
export default MoneySnapshot;