import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="project-section container">
      <span className="section-separator"></span>
      <h1 className="section-header test">Projects</h1>
      <div className="project-row">
        <a
          href="https://youtube-homepage-clone.herokuapp.com/home"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-card">
            <img
              src="/images/Youtube-homepage-clone.JPG"
              alt="Project image"
              className="project-image"
            />
            <h3 className="project-title">Homepage</h3>
            <span className="section-separator center"></span>
            <p className="project-description">
              This project is made with CSS and vanlilla Javascript. It has
              tooltips, dark and lightmode and some hover effects.
            </p>
            <p className="project-technologies">
              <div className="technologies">css</div>
              <div className="technologies">node</div>
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Anemoi4/Cart-API"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-card">
            <img
              src="/images/cart.webp"
              alt="Project image"
              className="project-image"
            />
            <h3 className="project-title">Cart-API</h3>
            <span className="section-separator center"></span>
            <p className="project-description">
              This API allows you to create a cart, add items to the cart,
              change the quantity of items in the cart and remove an item from
              the cart.
            </p>
            <p className="project-technologies">
              <div className="technologies">Mongo</div>
              <div className="technologies">node</div>
            </p>
          </div>
        </a>
      </div>
      <div className="project-row">
        <a
          href="https://github.com/EmilFrisk1/Job-listing-api/tree/main"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-card">
            <img
              src="/images/job_listings_bg.png"
              alt="Project image"
              className="project-image"
            />
            <h3 className="project-title">Job listing backend</h3>
            <span className="section-separator center"></span>
            <p className="project-description">
              This project is backend for job listings application.
            </p>
            <p className="project-technologies">
              <div className="technologies-row">
                <div className="technologies">postgreSQL</div>
                <div className="technologies">express</div>
              </div>
            </p>
          </div>
        </a>
        <a
          href="https://game-mania123.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-card">
            <img
              src="/images/Gamin-forum-app.JPG"
              alt="Project image"
              className="project-image"
            />
            <h3 className="project-title">Gaming Forum</h3>
            <span className="section-separator center"></span>
            <p className="project-description">
              This project has custom authentication system that uses JWT,
              custom error handling on the server and sorting options for the
              posts.
            </p>
            <p className="project-technologies">
              <div className="technologies-row">
                <div className="technologies">mongo</div>
                <div className="technologies">express</div>
              </div>
              <div className="technologies-row">
                <div className="technologies">React</div>
                <div className="technologies">node</div>
              </div>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
