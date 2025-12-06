import React from "react";
import { FaUser, FaFolder, FaHeadset } from "react-icons/fa";
import projects from "../../../../assets/data";

console.log(projects);

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">About Me</h1>
          <p className="section__subtitle">My Introduction</p>
        </div>
        <div className="about__content">
          <div className="about__content--image"></div>
          <div className="about__content--data">
            {/* staaaaaaaaaaaaaaats */}
            <div className="about__content--data-stats">
              {/* stat */}
              <div className="about__content--data-stats-stat">
                <FaUser className="about-icon" />
                <h3 className="about__content--data-stats-stat-title">
                  Experience
                </h3>
                <p className="about__content--data-stats-stat-subtitle">
                  3 Years learning
                </p>
              </div>
              {/* stat */}
              <div className="about__content--data-stats-stat">
                <FaFolder className="about-icon" />
                <h3 className="about__content--data-stats-stat-title">
                  Completed
                </h3>
                <p className="about__content--data-stats-stat-subtitle">
                  {projects.length} + Projects
                </p>
              </div>
              {/* stat */}
              <div className="about__content--data-stats-stat">
                <FaHeadset className="about-icon" />
                <h3 className="about__content--data-stats-stat-title">
                  Support
                </h3>
                <p className="about__content--data-stats-stat-subtitle">
                  Online 24/7
                </p>
              </div>
            </div>

            {/* description */}
            <p className="about__content--data-description">
              Frontend developer, I create web pages with UI / UX user
              interface, I have years of experience and many clients are happy
              with the projects carried out.
            </p>
            {/* download cvv */}
            <a
              href={require("../../../../assets/Baslaam-Cv.pdf")}
              download
              className="button"
            >
              Download my cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
