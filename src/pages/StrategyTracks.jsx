//obvious? Track page theat'll hold the infor for each strategy trach
//  each page needs a navbar yeahh
//css
import "../styles/strattracks.css";

//react stuff
import { Link } from "react-router-dom";

//other stuffs ig

function StrategyTrack() {
    //all functions in react start with return, idk why yet
    return (
        <div className="tracks-page">
            <h1 className="tracks-title"> Choose YOUR financial journey</h1>

            <div className="tracks-row">

                {/*first track*/}
                <section className="track-card">
                    <h2> First Property Path</h2>
                    <p className="track-desc">
                        A guided journey, designed for young professionals preparing to purchase their first home!
                        This experience simplifies the complexities of becoming a homeowner, ensuring that you're not
                        only confident in your journey, but also feel excited as you take your first steps towards a place
                        that is truly your own.
                    </p>
                    <Link to="/trackdetails" className="track-btn"> Start Track!</Link>
                </section>
                {/*gonna need dynamic info so that the page loads the relevant content for each track....sigh*/}

                {/*2nd track*/}
                <section className="track-card">
                    <h2> Lifestyle and Investing</h2>
                    <p className="track-desc">
                        Discover how to thoughtfully balance spending, saving and investing, without sacrificing the joy of
                        living. This plan will empower your financial discipline while still allowing you to enjoy the little
                        luxuries and comforts that make life meaningful for you.
                    </p>
                    <Link to="/trackdetails" className="track-btn"> Start Track!</Link>
                </section>

                {/*track three*/}
                <section className="track-card">
                    <h2> Debt-free and Stable</h2>
                    <p className="track-desc">
                        A plan, carefully created, to help you elimante debt and establish lasting financial stability.
                    </p>
                    <Link to="/trackdetails" className="track-btn"> Start Track!</Link>
                </section>

            </div>

            {/*recommended for you comment like box thingy*/}
            <div className="recommended-box">
                <h3> Recommended for you!</h3>
                <p>
                    Based on your current spending habbits and goals, NexGen suggets starting with the 
                    <strong> Balanced Lifestyle and Investing </strong> track.
                </p>
            </div>
        </div>
    );
    
}

//exporting so other files can access
export default StrategyTrack;