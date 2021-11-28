import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../images/shared/logo.svg";

const Header = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [navExpanded, setNavExpanded] = useState(false);
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const renderNavUnderline = (path) => {
    if (path === currentPath) {
      return "underline underline--active";
    }
    return "underline underline--inactive";
  };

  return (
    <header className="Header">
      <div className="Header__logo">
        <Logo />
      </div>
      <input
        type="checkbox"
        className="Header__nav-mobile-checkbox"
        id="nav-mobile-button"
        onChange={(e) => {
          if (e.target.checked) {
            setNavExpanded(true);
          } else {
            setNavExpanded(false);
          }
        }}
      />
      <label
        htmlFor="nav-mobile-button"
        className="Header__nav-mobile-button"
        aria-controls="primary-navigation"
        aria-expanded={navExpanded}
      >
        <span className="Header__nav-mobile-icon">
          <span className="sr-only">Menu</span>
        </span>
      </label>
      <div className="Header__line"></div>
      <nav className="Header__nav">
        <ul className="Header__list" id="primary-navigation">
          <li className="Header__nav-item">
            <Link
              to="/"
              className={`Header__nav-link ${renderNavUnderline("/")}`}
            >
              <span className="Header__nav-number" aria-hidden="true">
                00
              </span>
              Home
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              to="/destination"
              className={`Header__nav-link ${renderNavUnderline(
                "/destination"
              )}`}
            >
              <span className="Header__nav-number" aria-hidden="true">
                01
              </span>
              Destination
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              to="/crew"
              className={`Header__nav-link ${renderNavUnderline("/crew")}`}
            >
              <span className="Header__nav-number" aria-hidden="true">
                02
              </span>
              Crew
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              to="/technology"
              className={`Header__nav-link ${renderNavUnderline(
                "/technology"
              )}`}
            >
              <span className="Header__nav-number" aria-hidden="true">
                03
              </span>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
