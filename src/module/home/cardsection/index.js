import React from 'react';
import './cardsection.scss';

import card1 from '../../../assets/image/card1.jpeg'
import card2 from '../../../assets/image/card2.jpeg'

export default function Cardsection() {
    return (
        <>
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
        </>
    )
}
