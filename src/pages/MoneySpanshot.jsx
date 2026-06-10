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
    const [grossIncome, setGrossIncome] = useState(userIncome || 0);
    const [housing, setHousing] = useState(0);
    const [mobility, setMobility] = useState(0);
    const [lifestyle, setLifestyle] = useState(0);
    const [debt, setDebt] = useState(0);
    const [savings, setSavings] = useState(0);

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

    //douhgnut churt stuff
    const totalForChart = housing + mobility + lifestyle + debt + savings;
    const housingPct = totalForChart ? (housing / totalForChart) * 100 : 0;
    const mobilityPct = totalForChart ? (mobility / totalForChart) * 100 : 0;
    const lifestylePct = totalForChart ? (lifestyle / totalForChart) * 100 : 0;
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

                    <button className="btn-primary save-btn" onClick={() => setUserIncome(grossIncome)}>
                    Save Income to Profile
                    </button>


                </div>
            </section>

            {/*metrics grid*/}
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
                </div>
            </section>

            {/*doughntu chart*/}
            <section className="snapshot-section">
                <div className="section-inner">
                    <h2 className="section-title">Spending Breakdown</h2>

                    <div className="donut-wrapper">
                        <div className="donut-chart"
                        style={{
                            background: `
                            conic-gradient(
                                var(--accent-gold) 0% ${housingPct}%,
                                var(--accent-mint) ${housingPct}% ${housingPct + mobilityPct}%,
                                var(--accent-blue) ${housingPct + mobilityPct}% ${housingPct + mobilityPct + lifestylePct}%,
                                var(--accent-red) ${housingPct + mobilityPct + lifestylePct}% ${housingPct + mobilityPct + lifestylePct + debtPct}%,
                                var(--accent-purple) ${housingPct + mobilityPct + lifestylePct + debtPct}% 100%
                            )
                            `
                        }}
                        >
                            <div className="donut-center">
                                {Math.round((totalExpenses / netIncome) * 100)}%
                            </div>
                        </div>

                        <div className="donut-legend">
                            <p><span className="dot gold"></span> Housing</p>
                            <p><span className="dot mint"></span> Mobility</p>
                            <p><span className="dot blue"></span> Lifestyle</p>
                            <p><span className="dot red"></span> Debt</p>
                            <p><span className="dot purple"></span> Savings</p>
                        </div>
                    </div>

                </div>
            </section>

            {/*insights*/}
            <section className="snapshot-section">
                <div className="section-inner">
                    <h2 className="section-title">Insights</h2>

                    <div className="insights-card">
                        <ul>
                        {insights.map((i, index) => (
                            <li key={index}>{i}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/*teach the usar smth nyana */}
             <section className="snapshot-section">
                <div className="section-inner learn-card">
                    <h2 className="section-title">Learn: Understanding Your Snapshot</h2>
                    <p>Your Money Snapshot helps you understand how your income is allocated across essential categories.</p>
                    <p>In South Africa, major fixed costs include housing, transport, medical aid, and electricity.</p>
                    <p>A strong financial foundation includes a surplus, manageable debt, and consistent savings.</p>
                </div>
            </section>
            
        </div>
    );
}

//exporting so other files can access
export default MoneySnapshot;