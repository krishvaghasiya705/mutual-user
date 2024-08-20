import React from "react";
import "./cardsection.scss";

import card1 from "../../../assets/image/card1.jpeg";
import card2 from "../../../assets/image/card2.jpeg";
import Werdetiel from "../../../assets/svg/werdetiel";

export default function Cardsection() {
  return (
    <div>
      <div className="werde-teil-title-main">
        <h1>
          Werde jetzt Teil unserer Community und gestalte die Angebote deiner Stadt <span>selbst mit!</span>
        </h1>
        <Werdetiel />
      </div>
      <div className="card-section">
        <div className="card-div">
          <img src={card1} alt="card1" />
          <div className="card-div-layer">
            <h2>OLDENBURG</h2>
            <span>Demnächst</span>
          </div>
        </div>
        <div className="card-div">
          <img src={card2} alt="card2" />
          <div className="card-div-layer">
            <h2>BREMEN</h2>
            <span>Demnächst</span>
          </div>
        </div>
      </div>
    </div>
  );
}
