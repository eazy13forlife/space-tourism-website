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
      <button
        key={index}
        className={`Destination__nav-item nav-text underline ${renderActivityClasses(
          item
        )} `}
        onClick={() => {
          setDestination(item);
        }}
        aria-controls={`${item}-tab`}
        role="tab"
        aria-selected={destination === item ? "true" : "false"}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="Destination page">
      <Header />
      <main className="Destination__main">
        <div className="container Destination__container">
          <h1 className="page-title Destination__page-title" tabIndex="-1">
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
              <div className="Destination__tabs">
                <ul className="Destination__tab-list nav-text" role="tablist">
                  {renderedNavItems}
                </ul>
              </div>
              <h2
                className="Destination__destination"
                id={`${destination}-tab`}
              >
                {name}
              </h2>
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
