import React, { useState } from "react";

import Header from "../../components/Header/Header.js";
import TechnologyInfo from "./technologyInfo.js";
import "./index.scss";

//create empty sliders array
const sliders = [];
sliders.length = 3;
sliders.fill();

const Technology = () => {
  const [technologyIndex, setTechnologyIndex] = useState(0);

  const { imageLandscape, imagePortrait, name, description } =
    TechnologyInfo[technologyIndex];

  const renderSliderActivityClass = (index) => {
    const activity =
      technologyIndex === index ? "slider-2--active" : "slider-2--inactive";

    return `Technology__slider slider-2 ${activity}`;
  };

  const renderedSliders = sliders.map((item, index) => {
    return (
      <div
        className={renderSliderActivityClass(index)}
        key={index}
        onClick={() => {
          setTechnologyIndex(index);
        }}
      >
        {index + 1}
      </div>
    );
  });

  return (
    <div className="Technology page">
      <Header />
      <main className="Technology__main">
        <h1 className="Technology__page-title page-title">
          <span className="page-title-number" aria-hidden="true">
            03
          </span>
          Space Launch 101
        </h1>
        <div className="Technology__container grid-container">
          <div className="Technology__slider-description">
            <div className="Technology__rendered-sliders">
              {renderedSliders}
            </div>
            <div className="Technology__text-info">
              <h2 className="Technology__term">
                <span className="Technology__term-subheading nav-text color-secondary uppercase">
                  The Terminology...
                </span>
                {name}
              </h2>
              <p className="Technology__description body-text">{description}</p>
            </div>
          </div>
          <picture className="Technology__image-container">
            <source media="(max-width:48em)" srcSet={imageLandscape} />

            <img
              src={imagePortrait}
              alt={`An image of a ${name}`}
              className="Technology__image"
            />
          </picture>
        </div>
      </main>
    </div>
  );
};

export default Technology;
