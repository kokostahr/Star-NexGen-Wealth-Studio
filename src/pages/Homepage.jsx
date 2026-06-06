//obvious? Landingpage. each page needs a navbar yeahh 
//added this after realising i want users to be introduced to the webapp first
//simple as heck layout 😭

//react stuff
import { Link } from "react-router-dom";

//css
import "../styles/homepage.css";


function Homepage() {
    //all functions in react start with return. ik why. whatever is in return gets shown on the page
    return (
    <div className="homepage-container">
        {/*a basic welcome message for the usar*/}

        <section className="homepage-hero">
        <div className="homepage-hero-inner">

          {/* text on the left side */}
          <div className="hero-copy">
            <span className="hero-eyebrow">Welcome</span>

            <h1 className="hero-title">
              NexGen Wealth <span>Studio</span>
            </h1>

            <p className="hero-subtitle">
              A guided financial learning platform designed to help young professionals
              make confident, informed financial decisions through structured strategy
              tracks and interactive simulations.
            </p>

            {/*need call to action things that'll take usar into the actual meat y potatoes of this webapp*/}
            <div className="hero-actions">
              <Link to="/strattracks" className="btn-primary">
                Explore Strategy Tracks
              </Link>

              <Link to="/simlab" className="btn-secondary">
                Try a Simulation?
              </Link>
            </div>

            <p className="hero-meta">
              Built for South Africans entering their financial independence journey.
            </p>
          </div>

          {/* panel on the right side */}
          <div className="hero-panel">
            <span className="hero-panel-label">About This Platform</span>

            <h3 className="hero-panel-title">
              Your personalised financial learning companion
            </h3>

            <p className="hero-panel-body">
              NexGen Wealth Studio helps you understand your finances through
              structured guidance, practical tools, and scenario‑based simulations.
            </p>

            <div className="hero-panel-highlight">
              Create an account or log in to save your progress and track your
              financial journey.
            </div>
          </div>

        </div>
      </section>

        {/*and finally, encouraging usar to ofc create an account so infor can be save*/}
       <section className="homepage-section">
        <div className="homepage-section-inner">

          <div className="section-card">
            <h2>What is NexGen Wealth Studio?</h2>

            <p>
              NexGen Wealth Studio was built to assist young professionals with
              managing their finances and making informed financial decisions.
              Through guided Strategy Tracks and interactive simulations, you’ll
              learn how to navigate real‑world financial scenarios with confidence.
              <br /><br />
              <Link to="/auth" className="link-inline">Create an account</Link> or{" "}
              <Link to="/auth" className="link-inline">log in</Link> to save your
              progress and personalise your experience.
            </p>
          </div>

        </div>
      </section>
      
            
            {/*a small nyana preview section, will see if i leave it in or if i remove it...*/}
             <section className="homepage-section">
        <div className="homepage-section-inner">
          <h2 style={{ marginBottom: "1rem" }}>Explore the Platform</h2>

          <div className="preview-grid">

            <div className="preview-card">
              <span className="preview-card-label">Strategy Tracks</span>
              <h3 className="preview-card-title">Guided Learning Paths</h3>
              <p className="preview-card-body">
                Step‑by‑step financial guidance tailored for young professionals.
              </p>
              <Link to="/strattracks" className="btn-secondary" style={{ marginTop: "0.75rem" }}>
                View Tracks
              </Link>
            </div>

            <div className="preview-card">
              <span className="preview-card-label">Simulations</span>
              <h3 className="preview-card-title">Interactive Tools</h3>
              <p className="preview-card-body">
                Test real‑world financial scenarios and compare outcomes.
              </p>
              <Link to="/simlab" className="btn-secondary" style={{ marginTop: "0.75rem" }}>
                Try Simulations
              </Link>
            </div>

            <div className="preview-card">
              <span className="preview-card-label">Your Profile</span>
              <h3 className="preview-card-title">Save Your Progress</h3>
              <p className="preview-card-body">
                Track your learning journey and revisit completed modules.
              </p>
              <Link to="/profile" className="btn-secondary" style={{ marginTop: "0.75rem" }}>
                Go to Profile
              </Link>
            </div>
          </div>

        </div>
            </section>
            
            {/*and finally, a footer!! i have a footer now =D*/}
             <footer className="homepage-footer">
        <div className="homepage-footer-inner">
          <span>© 2026 NexGen Wealth Studio</span>
          <span>Built for DIGA4015A</span>
        </div>
      </footer>

    </div>
    );
}

//exporting so other files can access
export default Homepage;