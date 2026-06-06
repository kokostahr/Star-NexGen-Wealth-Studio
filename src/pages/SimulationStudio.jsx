//css
import "../styles/simstudio.css";

//react
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

//other stuffs
import { simulations } from "../simulations";

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

    //build the initial input state dynamically
    const initialValues = {};
    sim.inputs.forEach((input) => {
        initialValues[input.key] = input.default;
    });

    const [values, setValues] = useState(initialValues);
    const [results, setResults] = useState(null);
    const [hasCalculated, setHasCalculated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //handle input changes
    function updateValue(key, newValue) {
        setValues({ ...values, [key]: Number(newValue) });
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
        }, 1200);
    }

    return (
        <div className="simstudio-page">

        {/*display the sim title*/}
        <h1 className="simstudio-title">{sim.title} Studio</h1>
        <div className="simstudio-layout">

            {/*inputs*/}
            <div className="inputs-container">
            <h2>Inputs</h2>

            {sim.inputs.map((input) => (
                <div className="input-group" key={input.key}>
                    <label>{input.label}</label>
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

            {hasCalculated && results && (
            <div className="fade-in">

                    {/*yearly bars if necessry*/}
                    {results.yearly && (
                        <div className="year-bars">

                            {(() => {
                            const maxValue = Math.max(...Object.values(results.yearly));
                            return [1, 2, 3, 4, 5].map((year) => (
                                <div className="output-bar" key={year}>
                                    <p>Year {year}</p>

                                    <div className="bar-pair">
                                        {Object.keys(results.yearly).map((key) => (
                                        <div
                                            key={key}
                                            className={`bar ${key}-bar`}
                                            style={{
                                            height: `${(results.yearly[key] / maxValue) * 100}%`,
                                            }}
                                        ></div>
                                        ))}
                                    </div>

                                    <div className="bar-labels">
                                        {Object.keys(results.yearly).map((key) => (
                                        <span key={key}>{sim.outputLabels[key]}</span>
                                        ))}
                                    </div>
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
            <button className="btn-wan">Save Scenario</button>
        </div>
        </div>
    );  
}
//exporting so other files can access
export default SimulationStudio;