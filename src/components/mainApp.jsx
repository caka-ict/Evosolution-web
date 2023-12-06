import React, { useContext, useEffect, useState } from "react";
import { SideBar } from "./core/sidebar/sidebar";
import { Header } from "./core/header/header";
import { Features } from "./content/features/features";
import { About } from "./content/about/about";
import { Project } from "./content/project/project";
import SmoothScroll from "smooth-scroll";
import { Technology } from "./content/technology/technology";
import { Partner } from "./content/partner/partner";
import { Footer } from "./core/footer/footer";
import { useTranslation } from "react-i18next";
import { FaArrowUp } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { MainContext } from "../context/content";
import "./main.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 20,
  speedAsDuration: true,
});
export default function MainApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { isLoading } = useContext(MainContext);
  const openSideBar = () => {
    setIsOpen((curent) => !curent);
  };
  const closeSideBar = () => {
    setIsOpen((curent) => !curent);
  };
  const toTopPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color="#fff"></ClipLoader>
        </div>
      ) : (
        <></>
      )}
      <SideBar t={t} isOpen={isOpen} closeSideBar={closeSideBar} />
      <Header t={t} openSideBar={openSideBar} isOpen={isOpen} />

      <Features t={t} />
      <About t={t} />
      <Project t={t} />
      <Technology t={t} />
      <Partner t={t} />
      <Footer t={t} />
      <div className="myBtn" onClick={() => toTopPage()} title="Go to top">
        <FaArrowUp></FaArrowUp>
      </div>
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
}
