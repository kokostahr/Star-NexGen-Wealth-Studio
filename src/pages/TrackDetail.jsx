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
import { saveData, loadData } from "../util/storage";


function TrackDetail() {
  const { userIncome, isLoggedIn } = useContext(UserContext);
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

  //build the initial milestone state dynamically
  const initialMilestones = track.years.reduce((acc, year) => {
    acc[`year${year.year}`] = year.milestones.reduce((m, item) => {
      m[item.key] = "Not started";
      return m;
    }, {});
    return acc;
  }, {});

  //load saved progress
  const saved = JSON.parse(localStorage.getItem(`track-progress:${trackId}`));

  const [milestonesState, setMilestonesState] = useState(saved || initialMilestones);
  const [showSaved, setShowSaved] = useState(false);

  //update a milestone
  function updateMilestone(year, key, value) {
    const updated = {
      ...milestonesState,
      [`year${year}`]: {
        ...milestonesState[`year${year}`],
        [key]: value,
      },
    };
    setMilestonesState(updated);
  }

  //calculate user progress % for tracks
   const totalMilestones = track.years.reduce(
    (sum, y) => sum + y.milestones.length,
    0
  );

  const completedMilestones = track.years.reduce((sum, y) => {
    return (
      sum +
      y.milestones.filter(
        (m) => milestonesState[`year${y.year}`][m.key] === "Done"
      ).length
    );
  }, 0);

  const progressPercent = Math.round((completedMilestones / totalMilestones) * 100);

  //dynamic recommendation logic (from config)
  const recommendation = track.focus.nextSteps(milestonesState);

  //giving the save button (to profile) actual functionality
  function handleSaveTrack() {
      // save to profile list
      const saved = loadData("savedTracks", []);

      const newEntry = {
          id: trackId,
          title: track.title,
          timestamp: Date.now(),
          progress: progressPercent,
      };

      const updated = [...saved, newEntry];
      saveData("savedTracks", updated);

      //show the progress saved nudge
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
  }




  return (
    <div className="trackdetails-page">

      {/*new! progress bars to show usar progress*/}
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="progress-label">{progressPercent}% Complete</p>
      </div>

      {/*relevant track title */}
      <h1 className="trackdetails-title">{track.title}</h1>
      <p className="trackdetails-comment">{track.subtitle}</p>

      <div className="trackdetails-layout">

        {/*year layout on the left side*/}
        <div className="years-container">

          {track.years.map((yearObj) => (
            <div className="year-column" key={yearObj.year}>
              <h2>Year {yearObj.year}</h2>

              {/*milestones */}
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

        {/*focus boxes on right hand side*/}
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

          {/*timeline*/}
          <div className="timeline-box">
            <h3>Your 5‑Year Timeline</h3>
            <div className="timeline">
              {track.years.map((y) => {
                const yearDone = y.milestones.every(
                  (m) => milestonesState[`year${y.year}`][m.key] === "Done"
                );
                return (
                  <div className="timeline-item" key={y.year}>
                    <div className={`timeline-dot ${yearDone ? "done" : ""}`}></div>
                    <p>Year {y.year}</p>
                  </div>
                );
              })}
            </div>
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

      {/*explainery tiles*/}
      <div className="explainer-tiles">
        {track.explainers.map((tile, index) => (
          <div className="explainer-tile" key={index}>
            <h4>{tile.title}</h4>
            <p>{tile.text}</p>
          </div>
        ))}
      </div>

      {/*buttons*/}
      <div className="trackdetails-buttons">
        <Link to="/strattracks" className="btn-too">Return to Tracks</Link>
        <button className="btn-wan" onClick={handleSaveTrack}>
            Save Track Progress
        </button>
        {showSaved && <p className="saved-msg">Progress Saved!</p>}
      </div>

    </div>
  );
}

export default TrackDetail;