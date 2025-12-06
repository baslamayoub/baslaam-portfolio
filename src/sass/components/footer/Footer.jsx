import React from "react";
import Social from "../home/Social/Social";
const Footer = () => {
  return (
    <section className="footer section">
      <div className="container">
        <div className="footer__content">
          <h1>Baslaam</h1>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>

            </ul>
          </nav>
              <Social row="row" />

              <p className="copyright">@baslaam. All rights reserved ❤️</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
