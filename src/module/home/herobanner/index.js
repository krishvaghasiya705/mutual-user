import React from "react";
import "./herobanner.scss";

import Herobannermobileimage from "../../../assets/image/herobannermobileimage.png";
import Linkedinicon from "../../../assets/svg/linkedin.svg";
import Instagramicon from "../../../assets/svg/instagram.svg";

export default function Herobanner() {
  return (
    <div className="herobanner">
      <div className="herobanner-content">
        <div className="herobanner-container">
          <div className="herobanner-title-main">
            <div>
              <h1>
                Einfach mehr <span>genießen</span>
              </h1>
              <h1>
                <p>
                  mit <span>MUTUALZ</span>
                </p>
              </h1>
            </div>
          </div>
          <div className="herobanner-mobile-image-main">
            <img src={Herobannermobileimage} alt="Herobannermobileimage" />
          </div>
        </div>
      </div>

      <div className="social-media-frame">
        <a href="https://in.linkedin.com/">
          <img src={Linkedinicon} alt="Linkedinicon" />
        </a>
        <span></span>
        <a href="https://www.instagram.com/">
          <img src={Instagramicon} alt="Instagramicon" />
        </a>
      </div>
    </div>
  );
}
