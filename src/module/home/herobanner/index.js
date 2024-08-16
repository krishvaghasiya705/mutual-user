import React from "react";
import "./herobanner.scss";
import Herobannermutuals from "../../../assets/svg/herobannermutuals";

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
                  mit
                  <Herobannermutuals />
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
