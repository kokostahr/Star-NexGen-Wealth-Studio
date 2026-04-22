//obvious? Detailed page of the different tracks. info needs to change dynamically
//  gonna add dynamic data for each track using ID from url, using a data js file. later tho
//css
import "../styles/trackdetails.css";

//react stuff
import { Link } from "react-router-dom";

//any other stuff ig


function TrackDetail() {
    //all functions in react start with return, idk why yet
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
                                    Placeholdar milestone 
                                </li>
                                <li>
                                    Placeholdar milestone 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>
                                    Placeholdar action 
                                </li>
                                <li>
                                    Placeholdar action 
                                </li>
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
                                    Placeholdar milestone 
                                </li>
                                <li>
                                    Placeholdar milestone 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>
                                    Placeholdar action 
                                </li>
                                <li>
                                    Placeholdar action 
                                </li>
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
                                    Placeholdar milestone 
                                </li>
                                <li>
                                    Placeholdar milestone 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>
                                    Placeholdar action 
                                </li>
                                <li>
                                    Placeholdar action 
                                </li>
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
                                    Placeholdar milestone 
                                </li>
                                <li>
                                    Placeholdar milestone 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>
                                    Placeholdar action 
                                </li>
                                <li>
                                    Placeholdar action 
                                </li>
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
                                    Placeholdar milestone 
                                </li>
                                <li>
                                    Placeholdar milestone 
                                </li>
                            </ul>
                        </div>

                        <div className="year-section">
                            <h3> Action Steps</h3>
                            <ul>
                                <li>
                                    Placeholdar action 
                                </li>
                                <li>
                                    Placeholdar action 
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/*right side with the focuse stuff*/}
                <div className="focus-container">

                    <div className="focus-box">
                        <h3> This Year's Focus</h3>
                        <p> Placeholdar text for focus area.</p>
                    </div>

                    <div className="focus-box">
                        <h3> Your Next Steps..?</h3>
                        <p> Placeholdar text for the next steps.</p>
                    </div>

                    <div className="focus-box">
                        <h3> Why This Matters?</h3>
                        <p> Placeholdar explanation text</p>
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