import React, { useState } from "react";

import Header from "../../components/Header/Header.js";
import crew from "./crewInfo.js";
import "./index.scss";

const crewArray = [];
crewArray.length = 4;
crewArray.fill();
const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  const { image, imageWebP, name, title, description } = crew[crewIndex];

  const renderActivity = (index) => {
    if (crewIndex === index) {
      return "slider-1--active";
    } else {
      return "slider-1--inactive";
    }
  };

  const renderedSliders = crewArray.map((item, index) => {
    return (
      <button
        className={`Crew__slider-button slider-1 ${renderActivity(index)}`}
        key={index}
        aria-controls={`${crew[index].title}-tab`}
        aria-label={crew[index].name}
        role="tab"
        aria-selected={crewIndex === index ? "true" : "false"}
        onClick={() => {
          setCrewIndex(index);
        }}
      ></button>
    );
  });

  return (
    <div className="Crew">
      <Header />
      <main className="Crew__main">
        <div className="Crew__container container">
          <h1 className="page-title Crew__page-title">
            <span className="page-title-number" aria-hidden="true">
              02
            </span>
            Meet your crew
          </h1>
          <div className="Crew__content">
            <article className="Crew__text-info">
              <h2 className="Crew__name" id={`${title}-tab`} tab-index="0">
                <span className="Crew__title">{title}</span>
                {name}
              </h2>
              <p className="Crew__description body-text color-secondary ">
                {description}
              </p>
              <div
                className="Crew__slider-buttons"
                role="tablist"
                aria-label="crew member list"
              >
                {renderedSliders}
              </div>
            </article>
            <figure className="Crew__image-container">
              <picture>
                <source srcSet={imageWebP} type="image/webp" />
                <img
                  src={image}
                  alt={`An image of ${name}`}
                  className="Crew__image"
                />
              </picture>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
