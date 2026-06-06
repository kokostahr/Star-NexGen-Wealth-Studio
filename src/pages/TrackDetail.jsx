//Detailed page of the different tracks. info needs to change dynamically
// gonna add dynamic data for each track using ID from url, using a data js file. later tho
//css
import "../styles/trackdetails.css";

//react stuff
import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

//any other stuff ig
import { tracks } from "../tracks";

function TrackDetail() {
  const { userIncome } = useContext(UserContext);
  const { trackId } = useParams();
  const track = tracks[trackId];

  //if the url is wron 
  if (!track) {
    return (
      <div className="trackdetails-page">
        <h1 className="trackdetails-title">Track Not Found</h1>
        <Link to="/strattracks" className="btn-too">Return to Tracks</Link>
      </div>
    );
  }

  //build the milestone state dynamically
  const initialMilestones = track.years.reduce((acc, year) => {
    acc[`year${year.year}`] = year.milestones.reduce((m, item) => {
      m[item.key] = "Not started";
      return m;
    }, {});
    return acc;
  }, {});

  const [milestonesState, setMilestonesState] = useState(initialMilestones);

  //update a milestone
  function updateMilestone(year, key, value) {
    setMilestonesState({
      ...milestonesState,
      [`year${year}`]: {
        ...milestonesState[`year${year}`],
        [key]: value,
      },
    });
  }

  //dynamic recommendation logic (from config)
  const recommendation = track.focus.nextSteps(milestonesState);

  return (
    <div className="trackdetails-page">

      {/*relevant track title*/}
      <h1 className="trackdetails-title">{track.title}</h1>
      <p className="trackdetails-comment">{track.subtitle}</p>

      <div className="trackdetails-layout">

        {/* left ahnd side, years*/}
        <div className="years-container">

          {track.years.map((yearObj) => (
            <div className="year-column" key={yearObj.year}>
              <h2>Year {yearObj.year}</h2>

              {/*milestones*/}
              <div className="year-section">
                <h3>Milestones</h3>
                <ul>
                  {yearObj.milestones.map((item) => (
                    <li key={item.key}>
                      {item.label}
                      <select
                        value={milestonesState[`year${yearObj.year}`][item.key]}
                        onChange={(e) =>
                          updateMilestone(yearObj.year, item.key, e.target.value)
                        }
                      >
                        <option>Not started</option>
                        <option>In progress</option>
                        <option>Done</option>
                      </select>
                    </li>
                  ))}
                </ul>
              </div>

              {/*action steps*/}
              <div className="year-section">
                <h3>Action Steps</h3>
                <ul>
                  {yearObj.actions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

        {/*right side, the focus boxes*/}
        <div className="focus-container">

          <div className="focus-box">
            <h3>This Year's Focus</h3>
            <p>{track.focus.thisYear}</p>
            <p>Your current income: R {userIncome.toLocaleString()}</p>
          </div>

          <div className="focus-box">
            <h3>Your Next Steps…</h3>
            <p>{recommendation}</p>
          </div>

          <div className="focus-box">
            <h3>Why This Matters</h3>
            <p>{track.focus.why}</p>
          </div>

        </div>
      </div>

      {/*teach the usar smth smth*/}
      <div className="learn-section">
        <h2>{track.learn.title}</h2>
        {track.learn.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>

      {/*explainery */}
      <div className="explainer-tiles">
        {track.explainers.map((tile, index) => (
          <div className="explainer-tile" key={index}>
            <h4>{tile.title}</h4>
            <p>{tile.text}</p>
          </div>
        ))}
      </div>

      {/*butns*/}
      <div className="trackdetails-buttons">
        <Link to="/strattracks" className="btn-too">Return to Tracks</Link>
        <button className="btn-wan">Save Track Progress</button>
      </div>

    </div>
  );
}

export default TrackDetail;