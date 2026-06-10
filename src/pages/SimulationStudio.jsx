//css
import "../styles/simstudio.css";

//react
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//other stuffs
import { simulations } from "../simulations";
import Tooltip from "../components/Tooltip";
import { saveData, loadData } from "../util/storage";

function SimulationStudio() {
    //links to the different lab pages. find out which page is running.
    const { simId } = useParams();
    const sim = simulations[simId];

    //if url is invald
    if (!sim) {
        return (
        <div className="simstudio-page">
            <h1 className="simstudio-title">Simulation Not Found</h1>
            <p>The simulation you’re trying to access does not exist.</p>
            <Link to="/simlab" className="btn-too">Back to Simulation Lab</Link>
        </div>
        );
    }

    //buuild default values
    const defaultValues = {};
    sim.inputs.forEach((input) => {
    defaultValues[input.key] = input.default;
    });

    //load saved values OR defaults
    const savedValues = loadData(`sim-${sim.id}-values`, defaultValues);
    const [values, setValues] = useState(savedValues);
    const [results, setResults] = useState(null);
    const [hasCalculated, setHasCalculated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //restore all the things the usar may have left the pae on
    useEffect(() => {
        const savedResults = loadData(`sim-${sim.id}-results`, null);
        const savedHasCalculated = loadData(`sim-${sim.id}-hasCalculated`, false);

        if (savedResults) setResults(savedResults);
        if (savedHasCalculated) setHasCalculated(savedHasCalculated);
    }, [sim.id]);


    //handle input changes
    function updateValue(key, newValue) {
        const updated = { ...values, [key]: Number(newValue) };
        setValues(updated);
        saveData(`sim-${sim.id}-values`, updated);
    }

    //run the relevant simulation
    function handleCalculate() {
        setIsLoading(true);
        setHasCalculated(false);

        setTimeout(() => {
            const output = sim.calculate(values);
            setResults(output);
            setIsLoading(false);
            setHasCalculated(true);

            //save results + calculated state
            saveData(`sim-${sim.id}-results`, output);
            saveData(`sim-${sim.id}-hasCalculated`, true);
        }, 1200);
    }

    //going to make the save btn acctually do smth and save the sim to the usar prfile
    function handleSaveScenario() {
        //only save if results exist 
        if (!results) {
            alert("Please calculate the simulation first!");
            return;
        }

        //then load existing saves
        const saved = loadData("savedSimulations", []);

        //try tp prevent duplicates 
        const alreadySaved = saved.some(entry =>
            entry.id === sim.id &&
            JSON.stringify(entry.values) === JSON.stringify(values) &&
            JSON.stringify(entry.results) === JSON.stringify(results)
        );

        if (alreadySaved) {
            alert("This scenario is already saved!");
            return;
        }

        // create new entry
        const newEntry = {
            id: sim.id,
            title: sim.title,
            timestamp: Date.now(),
            values,
            results,
        };

        //finally save errthing
        const updated = [...saved, newEntry];
        saveData("savedSimulations", updated);

        alert("Scenario saved!");
    }


    return (
        <div className="simstudio-page">

            {/*display the sim title*/}
            <h1 className="simstudio-title">{sim.title} Studio</h1>
            <div className="simstudio-layout">

                {/*inputs*/}
                <div className="inputs-container">
                <h2>Inputs</h2>
                    <div className="inputs-grid">
                        {sim.inputs.map((input) => (
                            <div className="input-group" key={input.key}>
                                <label>
                                    {input.label}
                                    {input.tooltip && <Tooltip text={input.tooltip} />}
                                </label>

                                <input
                                    type="number"
                                    min={input.min}
                                    max={input.max}
                                    value={values[input.key]}
                                    onChange={(e) => updateValue(input.key, e.target.value)}
                                />

                                <p className="input-value">
                                    {input.key === "interest"
                                    ? `${values[input.key]}%`
                                    : `R ${values[input.key].toLocaleString()}`}
                                </p>
                            </div>
                        ))}
                    </div>

            <button className="calculate-btn" onClick={handleCalculate}>
                Calculate
            </button>
            </div>

            {/*outputs*/}
            <div className="outputs-container">

                <h2>Outputs</h2>
                {isLoading && (
                    <p className="loading-msg fade-in">Calculating your scenario...</p>
                )}

                {(hasCalculated && results) && (
                    <div className="fade-in">
                        {/*yearly bars*/}
                        {results.yearly && (
                            <div className="year-bars single-year">

                                {(() => {
                                    const categories = Object.keys(results.yearly);
                                    const values = Object.values(results.yearly);
                                    const maxValue = Math.max(...values);

                                    return categories.map((key) => (
                                    <div className="output-bar" key={key}>
                                        <p>{sim.outputLabels[key]}</p>

                                        <div className="bar-wrapper">
                                            <div
                                                className={`bar ${key}-bar`}
                                                style={{
                                                height: `${(results.yearly[key] / maxValue) * 100}%`,
                                                }}
                                            ></div>
                                        </div>

                                        <p className="bar-value">
                                        R {results.yearly[key].toLocaleString()}
                                        </p>
                                    </div>
                                    ));
                                })()}

                            </div>
                        )}

                        {/*verdict*/}
                        {results.verdict && (
                            <div className="verdict-box fade-in">
                                <h3>Verdict</h3>
                                <p>{results.verdict}</p>
                            </div>
                        )}
                    </div>
                )}
                </div>

                </div>

                {/*learn smth nyana*/}
                {hasCalculated && sim.education && (
                <div className="education-box fade-in">
                    <h3>{sim.education.title}</h3>

                    {sim.education.paragraphs.map((p, index) => (
                    <p key={index}>{p}</p>
                    ))}

                    {sim.education.bullets && (
                    <>
                        <h4>{sim.education.bulletTitle}</h4>
                        <ul>
                        {sim.education.bullets.map((b, index) => (
                            <li key={index}>{b}</li>
                        ))}
                        </ul>
                    </>
                    )}
                </div>
                )}

                {/*tiles of explainery*/}
                <div className="explainer-tiles fade-in">
                {sim.explainers.map((tile, index) => (
                    <div className="explainer-tile" key={index}>
                        <h4>{tile.title}</h4>
                        <p>{tile.text}</p>
                    </div>
                ))}
                </div>

                {/*btn*/}
                <div className="simstudio-btns">
                    <Link to="/simlab" className="btn-too">Try Another Simulation?</Link>
                    <button className="btn-wan" onClick={handleSaveScenario}>
                        Save Scenario
                    </button>

                </div>

        </div>
    );  
}
//exporting so other files can access
export default SimulationStudio;