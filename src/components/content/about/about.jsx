import React, { useEffect } from "react";
import "./about.css";
import aos from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../../assets/img/about_img', false, /\.(png|jpe?g|svg)$/));


export const About = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  const aboutMap = t("about.about_list", { returnObjects: true });
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="linear"
          data-aos-offset="200"
          className="container-content-header content-about-container"
        >
          <h1 className="content-about-header">{t("about.title")}</h1>
          <div className="header-content content-about-description">
            <p>{t("about.paragraph")}</p>
          </div>
          <div className="bottom"></div>
        </div>

        <div className="about-list-icon about-list-icon-1">
          {aboutMap?.map((item, index) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-duration="300"
                data-aos-easing="ease-in-sine"
                key={index}
                className="icon-content"
              >
                <div className="img-container">
                  <img src={images[item.icon]} ></img>
                </div>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="about-list-icon about-list-icon-2">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              200: {
                width: 200,
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                width: 400,
                slidesPerView: 2,
                spaceBetween: 20,
              },
              650: {
                width: 650,
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {aboutMap?.map((item, index) => {
              return (
                <SwiperSlide>
                  {" "}
                  <div
                    data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-duration="800"
                    data-aos-easing="linear"
                    key={index}
                    className="icon-content"
                  >
                    <div className="img-container">
                      <img src={images[item.icon]} ></img>
                    </div>
                    <p>{item.title}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
