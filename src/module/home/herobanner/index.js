import React from "react";
import "./herobanner.scss";
import Herobannermutuals from "../../../assets/svg/herobannermutuals";

export default function Herobanner() {
  return (
    <div className="herobanner">
      <div className="herobanner-content">
        <div className="herobanner-container">
          <div className="herobanner-title-main">
            <div className="">
              <h1>
                Einfach mehr <span>genießen</span>
              </h1>
            </div>
            <div>
              <h1>
                mit
                <Herobannermutuals />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
