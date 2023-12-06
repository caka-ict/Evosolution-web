import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";
import "./project.css";
import aos from "aos";
import { FaExternalLinkAlt } from "react-icons/fa";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../../assets/img/project_company', false, /\.(png|jpe?g|svg)$/));

export const Project = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  const listProject = t("project.project_list", { returnObjects: true });
  return (
    <div id="project" className="project">
      <div className="project-container">
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-easing="linear"
          className="container-content-header project-header"
        >
          <h1>{t("project.title")}</h1>
          <div className="header-content project-header-description">
            <p>{t("project.paragraph")}</p>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="project-list">
          <div className="row-project-list">
            {listProject?.map((item, index) => {
              return (
                <div
                  className="col-project-list mb-3"
                  data-aos="zoom-in"
                  data-aos-duration={1000 + index * 300}
                  key={index}
                >
                  <a href={item.linkProject} target="_blank">
                    <div className="image-project mb-3">
                      <img src={images[item.imageProject]} />
                      <div className="overlay">
                        <FaExternalLinkAlt className="icon-link-project"></FaExternalLinkAlt>{" "}
                      </div>
                    </div>
                  </a>
                  <div className="content-image">
                    <h2>{item.titleProject}</h2>
                    <p>{item.descProject}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
