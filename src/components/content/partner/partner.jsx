import React, { useEffect } from "react";
import "./partner.css";
import "./partner-img.css";
import aos from "aos";
function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../../assets/img/company', false, /\.(png|jpe?g|svg)$/));

export const Partner = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  const listPartner = t("partner.list_partner", { returnObjects: true });
  return (
    <div id="partner" className="partner-container">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="600"
        className="container-content-header partner-content"
      >
        <h1>{t("partner.title")}</h1>
        <div className="header-content partner-description">
          <p>{t("partner.paragraph")}</p>
        </div>
        <div className="bottom"></div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-offset="600"
        data-aos-easing="linear"
        className="list-partner"
      >
        {listPartner?.map((item, index) => {
          return (
            <div className="partner">
              <img className={item.class} src={images[item.image]} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
