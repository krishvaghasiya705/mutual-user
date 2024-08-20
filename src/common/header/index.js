import React, { useState, useEffect } from "react";
import "./header1.scss";
import { NavLink } from "react-router-dom";

import DropdownIcon from "../../assets/svg/dropdownicon.svg";
import Menuicon from "../../assets/icons/menu.png";
import Sidebar from "../../components/sidebar";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="header-main-alignment">
            <div className="header-logo-main">
              <NavLink to={"/"}>
                <h1>MUTUALZ</h1>
              </NavLink>
            </div>
            <div className="header-content-main-one">
              <NavLink to={"/"}>
                <div className="teil-button">
                  <button>
                    <p>Teil der Community werden</p>
                    <img src={DropdownIcon} alt="DropdownIcon" />
                  </button>
                </div>
              </NavLink>
              <NavLink to={"/"}>Funktion</NavLink>
              <NavLink to={"/"}>Standorte</NavLink>
              <NavLink to={"/"}>Über uns</NavLink>
              <NavLink to={"/"}>Kontakt</NavLink>
            </div>
            <div className="header-content-main-two">
              <NavLink to={"/"}>
                <div className="mutuals-button">
                  <button>
                    <p>
                      <span>MUTUALZ</span> für dein Business
                    </p>
                  </button>
                </div>
              </NavLink>

              <div className="language-button">
                <button>
                  <p id="Checked">
                    <span>DE</span>
                  </p>
                  <p>
                    <span>EN</span>
                  </p>
                </button>
              </div>
              <div className="header-sidebar-image">
                <img src={Menuicon} alt="Menuicon" onClick={toggleSidebar} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
}

export default Header;