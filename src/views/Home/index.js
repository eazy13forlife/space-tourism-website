import React from "react";

import Header from "../../components/Header/Header.js";
import "./index.scss";

const Home = (ownProps) => {
  console.log(ownProps);
  return (
    <div className="Home">
      <Header />
      <main className="Home__main">
        <section className="Home__content">
          <div className="container Home__container">
            <div className="Home__info">
              <h1>
                <span className="Home__heading-minor heading-5 uppercase color-secondary ">
                  So, you want to travel to
                </span>
                <span className="heading-1 uppercase Home__heading-major color-tertiary">
                  Space
                </span>
              </h1>
              <p className="Home__description body-text color-secondary">
                Let&#39;s face it; If you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we&#39;ll give you a truly
                out of this world experience..
              </p>
            </div>
            <button className="button-main Home__button">Explore</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
