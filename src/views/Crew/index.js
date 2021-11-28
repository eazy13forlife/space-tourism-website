import React, { useState } from "react";

import Header from "../../components/Header/Header.js";
import crew from "./crewInfo.js";
import "./index.scss";

const crewArray = [];
crewArray.length = 4;
crewArray.fill();
const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  const { image, name, title, description } = crew[crewIndex];

  const renderActivity = (index) => {
    if (crewIndex === index) {
      return "slider-1--active";
    } else {
      return "slider-1--inactive";
    }
  };

  const renderedSliders = crewArray.map((item, index) => {
    return (
      <div
        className={`Crew__slider-button slider-1 ${renderActivity(index)}`}
        key={index}
        onClick={() => {
          setCrewIndex(index);
        }}
      ></div>
    );
  });

  return (
    <div className="Crew">
      <Header />
      <main className="Crew__main">
        <div className="Crew__container container">
          <h1 className="page-title">
            <span className="page-title-number" aria-hidden="true">
              02
            </span>
            Meet your crew
          </h1>
          <div className="Crew__content">
            <article className="Crew__text-info">
              <h2 className="Crew__name">
                <span className="Crew__title">{title}</span>
                {name}
              </h2>
              <p className="Crew__description body-text color-secondary ">
                {description}
              </p>
              .<div className="Crew__slider-buttons">{renderedSliders}</div>
            </article>
            <figure className="Crew__image-container">
              <img
                src={image}
                alt={`An image of ${name}`}
                className="Crew__image"
              />
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
