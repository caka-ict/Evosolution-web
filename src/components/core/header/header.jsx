import React from "react";
import ParticlesBg from "../../share/particleBg";
import "./header.css";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/header/logo.svg'
export const Header = ({ data, openSideBar, isOpen, t }) => {
  const handleOpenSideBar = () => {
    openSideBar();
  };

  const scrollToElement = (elementID) => {
    const element = document.getElementById(elementID);
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <header id="homepage" className="container-header">
      <div className="logo-image">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div
        className={isOpen ? "toggle-sidebar display-none" : "toggle-sidebar"}
        onClick={() => handleOpenSideBar()}
      >
        <div className="dash"></div>
        <div className="dash"></div>
        <div className="dash"></div>
      </div>
      <div className="intro">
        <ParticlesBg />

        <div className="container-content">
          <div className="intro-text">
            <h1 className="header-content-banner">{t("header.title")}</h1>
            <p>{t("header.paragraph")}</p>
            <button className="btn-header">
              {" "}
              <a onClick={() => scrollToElement("contact")}>
                {t("header.contact")}
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
