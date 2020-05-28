import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <img src="./images/Figuide Logo White.png"  ></img>
            <div>
                Powered by 3Idiots
            </div>
            <div style={{marginTop: "25px"}}>
                Enjoy your vacations
            </div>
            <div>
                More knownledge with good tour guides
            </div>
            <div className="lastLine">
                <li>© 2020 3Idiots, Inc.</li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Help</a></li>
            </div>
        </div>
    );
}

export default Footer;
