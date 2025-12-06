import React from "react";
import { GrValidate } from "react-icons/gr";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">Skills</h1>
          <p className="section__subtitle">My technical level</p>
        </div>
        <div className="skills__content">
          <div className="skills__content--frontend">
            <h2 className="skills__title">Frontend developer</h2>
            <div className="skills-lists">
              <ul className="skills-list">
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">HTML</p>
                    <p className="skill-level">Basic</p>
                  </div>
                </li>
                <li className="skills-item">
                  <GrValidate className="skills-icon" />

                  <div className="skill-title">
                    <p className="skill-name">CSS</p>
                    <p className="skill-level">Advanced</p>
                  </div>
                </li>
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">JavaScript</p>
                    <p className="skill-level">Intermediate</p>
                  </div>
                </li>
              </ul>
              <ul className="skills-list">
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">Bootstrap</p>
                    <p className="skill-level">Intermediate</p>
                  </div>
                </li>
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">Git</p>
                    <p className="skill-level">Intermediate</p>
                  </div>
                </li>
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">React</p>
                    <p className="skill-level">Intermediate</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="skills__content--backend">
            <h2 className="skills__title">Backend developer</h2>
            <div className="skills-lists">
              <ul className="skills-list">
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">PHP</p>
                    <p className="skill-level">Knowledge</p>
                  </div>
                </li>
                <li className="skills-item">
                  <GrValidate className="skills-icon" />

                  <div className="skill-title">
                    <p className="skill-name">Node Js</p>
                    <p className="skill-level">Basic</p>
                  </div>
                </li>
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">Python</p>
                    <p className="skill-level">Knowledge</p>
                  </div>
                </li>
              </ul>
              <ul className="skills-list">
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">MySQL</p>
                    <p className="skill-level">Knowledge</p>
                  </div>
                </li>
                <li className="skills-item">
                  <GrValidate className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">Firebase</p>
                    <p className="skill-level">Knowledge</p>
                  </div>
                </li>
                {/* <li className="skills-item">
                  <GrValidate  className="skills-icon" />
                  <div className="skill-title">
                    <p className="skill-name">React</p>
                    <p className="skill-level">Intermediate</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
