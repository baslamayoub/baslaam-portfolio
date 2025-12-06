import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble, FaGithub, FaInstagram } from "react-icons/fa";

const Social = ({ row }) => {
  return (
    <div className={`home__social ${row}`}>
      <a
        className="home__social-1"
        href="https://www.linkedin.com/in/ayoub-baslam-5a0797181/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin />
      </a>
      <a
        className="home__social-2"
        href="http://www.dribbble.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDribbble />
      </a>
      <a
        className="home__social-3"
        href="https://github.com/ayoubbas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
