import React from "react";
import "./werdesection.scss";
import Werdeborderone from "../../../assets/mutualssvgimages/werdeborderone";
import Werdebordertwo from "../../../assets/mutualssvgimages/werdebordertwo";

export default function Werdesection() {
  return (
    <div className="weder-section-main">
      <div className="weder-section-container">
        <div className="werde-title-main">
          <h1>
            <span>Werde</span>
            <strong>
              <Werdeborderone />
              <b>MUTUALZ</b>
            </strong>
            <br />
            <h1>
              <p>
                und genieße
                <span>
                  alle
                  <Werdebordertwo />
                </span>
                Vorteile
              </p>
            </h1>
          </h1>
        </div>
      </div>
    </div>
  );
}
