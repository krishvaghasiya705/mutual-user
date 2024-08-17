import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

import arrowRight from "../../assets/svg/arrowRight.svg";
import arrowTop from "../../assets/svg/arrowTop.svg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer>
        <div className="top-arrow" onClick={scrollToTop}>
          <img src={arrowTop} alt="arrowTop" />
        </div>
        <div className="footer-title">
          <h2>
            Teil{" "}
            <span>
              von <span className="muyualz-text">MUTUALZ</span> <br /> werden
            </span>
          </h2>
          <p>In Kürze auf allen gängigen Geräten verfügbar.</p>
        </div>
        <div className="footer-input">
          <div className="input-div">
            <input type="email" placeholder="Deine E-Mail" />
            <div className="arrow-right">
              <img src={arrowRight} alt="arrowRight" />
            </div>
          </div>
          <div className="checkbox-div">
            <input type="checkbox" />
            <p>
              Mit dem Eintragen in unseren Newsletter erklärst du dich mit dem Empfang des Newsletters mit Informationen zu unserem Launch und anderen Mutualz-News einverstanden. Deine Einwilligung kann jederzeit mit Wirkung für die Zukunft
              widerrufen werden. Ausführliche Hinweise halten unsere <NavLink>Datenschutzhinweise</NavLink> für dich bereit.
            </p>
          </div>
          <h3>MUTUALZ</h3>
        </div>
        <div className="footer-links">
          <NavLink>Restaurant empfehlen</NavLink>
          <NavLink>Datenschutzerklärung</NavLink>
          <NavLink>Impressum</NavLink>
          <NavLink>Verwendung von Cookies</NavLink>
          <NavLink>Kontakt</NavLink>
        </div>
        <div className="copyright">Copyright © 2023 JESAM Consulting GmbH. Alle Rechte vorbehalten.</div>
      </footer>
    </div>
  );
}
