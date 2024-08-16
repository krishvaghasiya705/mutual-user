import React from "react";
import "./deshalbsection.scss";
import Mutualsborderone from "../../../assets/mutualssvgimages/mutualsborderone";
import Mutualsborderonelogo from "../../../assets/mutualssvgimages/mutualsborderonelogo.svg";

export default function Deshalbsection() {
  return (
    <div className="deshalb-section-main">
      <div className="deshalb-container">
        <div className="deshalb-grid-main">
          <div className="deshalb-grid-items-one">
            <h1>Deshalb sind wir</h1>
            <div className="mutuals-bordered-div-main">
              <Mutualsborderone />
              <div className="mutualsborderonelogo">
                <img src={Mutualsborderonelogo} alt="Mutualsborderonelogo" />
              </div>
            </div>
          </div>
          <div className="deshalb-grid-items-two">
            <div className="deshalb-grid-items-two-peragraph">
              <p>
                Durch die Community bist du immer informiert, was in deiner Umgebung passiert: Haben neue Restaurants eröffnet? Gibt es dort neue exotische Gerichte? Welches coole Event steht an? Mitglieder:innen können ihre Erfahrungen und
                Erlebnisse ganz einfach teilen und sich gegenseitig folgen. So verpasst keine:r etwas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
