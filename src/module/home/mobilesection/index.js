import React from 'react';
import './mobilesection.scss';

import mobiles from '../../../assets/image/mobiles.png'
import signature from '../../../assets/image/signature.png'

export default function Mobilesection() {
  return (
    <>
      <div className="mobile-section">
        <div className="mobile-container">
            <div className="mobile-div">
                <div className="mobile-div-content">
                    <p>Es bleiben nur noch</p>
                    <h2>48:24:59:59</h2>
                    <p>bis die MUTUALZ-App verfügbar ist. Hinterlassen Sie uns Ihre E-Mail-Adresse, damit Sie es als Erster erfahren.</p>
                    <img src={signature} alt="signature" />
                    <button>Teil der Community werden</button>
                </div>
                <div className="mobile-div-image">
                    <img src={mobiles} alt="mobiles" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
