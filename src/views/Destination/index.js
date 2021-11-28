import React, { useState } from "react";
import Header from "../../components/Header/Header.js";

import destinations from "./destinationsInfo.js";
import "./index.scss";

const Destination = () => {
  const [destination, setDestination] = useState("moon");

  const {
    image,
    title: name,
    description,
    distance,
    time,
  } = destinations[destination];

  const renderActivityClasses = (name) => {
    if (name === destination) {
      return "Destination__nav-item--active underline--active";
    } else {
      return "Destination__nav-item--inactive underline--inactive";
    }
  };

  const navItems = ["moon", "mars", "europa", "titan"];

  const renderedNavItems = navItems.map((item, index) => {
    return (
      <li
        key={index}
        className={`Destination__nav-item underline ${renderActivityClasses(
          item
        )} `}
        onClick={() => {
          setDestination(item);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="Destination page">
      <Header />
      <main className="Destination__main">
        <div className="container Destination__container">
          <h1 className="page-title Destination__page-title">
            <span className="page-title-number" aria-hidden="true">
              01
            </span>{" "}
            Pick your destination
          </h1>
          <div className="Destination__destination-content">
            <figure className="Destination__image-container">
              <img
                src={image}
                alt={`An image of ${name}`}
                className="Destination__image"
              />
            </figure>
            <div className="Destination__text-content">
              <nav className="Destination__nav">
                <ul className="Destination__nav-list nav-text">
                  {renderedNavItems}
                </ul>
              </nav>
              <h2 className="Destination__destination">{name}</h2>
              <p className="body-text Destination__description">
                {description}
              </p>
              <div className="Destination__distance-time">
                <div className="Destination__stats-container">
                  <h3 className="Destination__stat-heading">Avg. Distance</h3>
                  <p className="Destination__stat">{distance}</p>
                </div>
                <div className="Destination__stats-container Destination__time-container">
                  <h3 className="Destination__stat-heading">
                    Est. Travel Time
                  </h3>
                  <p className="Destination__stat ">{time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
