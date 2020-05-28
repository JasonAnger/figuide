import React from 'react';
import './SubPage.css';

function SubPage() {
    return (
        <div className="SubPage">
            <div className="card-container">
                <div className="explain-card">
                    <div className="explain-card-inside">
                        <img src="./images/Time Icon.png"></img>
                        <div>Time-saving</div>
                        <li>Find tour guides</li>
                        <li>faster and save</li>
                        <li>your time</li>
                    </div>
                </div>
                <div className="explain-card">
                    <div className="explain-card-inside">
                        <img src="./images/Safety Icon.png"></img>
                        <div>Safety</div>
                        <li>All tour guides are</li>
                        <li>verified and have</li>
                        <li>contracts with us</li>
                    </div>
                </div>
                <div className="explain-card">
                    <div className="explain-card-inside">
                        <img src="./images/Fair Prices Icon.png"></img>
                        <div>Fair Prices</div>
                        <li>Prices depend on</li>
                        <li>the tourist and you</li>
                        <li>only pay for them</li>
                    </div>
                </div>
            </div>
            <div className="Go-with">
                <div id="go-with-text">GO WITH</div>
                <img src="../images/Figuide Color.png"></img>
                <div>
                    <li>More safer, more faster and far more cheaper.</li>
                    <li>Go with our tourists, you can see</li>
                    <li>the soul of the place that you visit.</li>
                </div>
            </div>
        </div>
    );
}

export default SubPage;
