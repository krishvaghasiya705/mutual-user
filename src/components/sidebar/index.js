import React from "react";
import "./sidebar.scss";

import Closeicon from "../../assets/icons/close.png";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          <img src={Closeicon} alt="Closeicon" />
        </button>
        <div className="sidebar-content-main">
          <div className="sidebar-content">
            <NavLink to={"/"}>Funktion</NavLink>
          </div>
          <div className="sidebar-content">
            <NavLink to={"/"}>Standorte</NavLink>
          </div>
          <div className="sidebar-content">
            <NavLink to={"/"}>Über uns</NavLink>
          </div>
          <div className="sidebar-content">
            <NavLink to={"/"}>Kontakt</NavLink>
          </div>
        </div>
      </div>
      <div className={`sidebar-background-bur-div ${isOpen ? "open" : ""}`} onClick={onClose}></div>
    </div>
  );
}

export default Sidebar;
