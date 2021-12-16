import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header.js";
import "./index.scss";

const Home = () => {
  return (
    <div className="Home page">
      <Header />
      <main className="Home__main" id="main">
        <section className="Home__content">
          <div className="container Home__container">
            <div className="Home__info">
              <h1>
                <span className="Home__heading-minor heading-5 uppercase color-secondary ">
                  So, you want to travel to
                </span>
                <span className=" Home__heading-major  uppercase color-tertiary">
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
            <Link
              to="/destination"
              className="Home__button Link__button button-main"
            >
              Explore
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
