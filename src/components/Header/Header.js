import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../images/shared/logo.svg";

const Header = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const renderNavUnderline = (path) => {
    if (path === currentPath) {
      return "underline--active";
    }
    return "underline--inactive";
  };

  return (
    <header className="Header">
      <Logo className="Header__logo" />
      <nav className="Header__nav">
        <div className="Header__line"></div>
        <ul className="Header__list">
          <li className="Header__nav-item">
            <Link
              to="/"
              className={`Header__nav-link underline ${renderNavUnderline(
                "/"
              )}`}
            >
              <span className="Header__nav-number">00</span>
              Home
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              to="/destination"
              className={`Header__nav-link underline ${renderNavUnderline(
                "/destination"
              )}`}
            >
              <span className="Header__nav-number">01</span>
              Destination
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              to="/crew"
              className={`Header__nav-link underline ${renderNavUnderline(
                "/crew"
              )}`}
            >
              <span className="Header__nav-number">02</span>
              Crew
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              to="/technology"
              className={`Header__nav-link underline ${renderNavUnderline(
                "/technology"
              )}`}
            >
              <span className="Header__nav-number">03</span>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
