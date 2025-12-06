import React, { useState } from "react";

import { FaRegEnvelope } from "react-icons/fa";
import {
  IoBriefcaseOutline,
  IoCloseOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { CiFileOn, CiImageOn, CiUser } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Baslaam
          </a>
          <div className="nav__menu">
            <ul className={active ? "nav__list active" : "nav__list close"}>
              <li onClick={() => setActive(false)} className="nav__list--item">
                <a href="#home" className="nav__list--link">
                  <IoHomeOutline className="nav__list--icon" />
                  Home
                </a>
              </li>
              <li onClick={() => setActive(false)} className="nav__list--item">
                <a href="#about" className="nav__list--link">
                  <CiUser className="nav__list--icon" />
                  About
                </a>
              </li>
              <li onClick={() => setActive(false)} className="nav__list--item">
                <a href="#skills" className="nav__list--link">
                  <CiFileOn className="nav__list--icon" />
                  Skills
                </a>
              </li>
              <li onClick={() => setActive(false)} className="nav__list--item">
                <a href="#services" className="nav__list--link">
                  <IoBriefcaseOutline className="nav__list--icon" />
                  Services
                </a>
              </li>
              <li onClick={() => setActive(false)} className="nav__list--item">
                <a href="#projects" className="nav__list--link">
                  <CiImageOn className="nav__list--icon" />
                  Projects
                </a>
              </li>
              <li onClick={() => setActive(false)} className="nav__list--item">
                <a href="#contact" className="nav__list--link">
                  <HiOutlineEnvelope className="nav__list--icon" />
                  Contact
                </a>
              </li>
              <div className="nav__close">
                <IoCloseOutline
                  onClick={() => setActive(false)}
                  className="nav__list--close "
                />
              </div>
            </ul>
          </div>
          <div className="nav__toggle">
            <div className="nav__app">
              <AiOutlineAppstore
                onClick={() => setActive(!active)}
                className={`${
                  active ? "nav__app--icon active-link" : "nav__list--store"
                }`}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
