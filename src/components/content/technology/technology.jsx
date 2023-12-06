import React, { useEffect } from "react";
import "./technology.css";
import aos from "aos";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../../assets/img/techno_icon', false, /\.(png|jpe?g|svg)$/));

export const Technology = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  const listTechnology = t("technology.techno_icon", { returnObjects: true });
  return (
    <div id="technology" className="technology-container">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-offset="600"
        data-aos-easing="linear"
        className="container-content-header technology-content"
      >
        <h1>{t("technology.title")}</h1>
        <div className="header-content description">
          <p>{t("technology.paragraph")}</p>
        </div>
        <div className="bottom"></div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-offset="600"
        data-aos-easing="linear"
        className="technology-icon"
      >
        {listTechnology?.map((item, index) => {
          return (
            <div key={index} className="icon-item mb-5">
              <img src={images[item.icon]} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
