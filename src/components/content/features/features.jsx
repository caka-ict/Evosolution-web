import React from "react";
import { useEffect } from "react";
import "./features.css";
import aos from "aos";
import "aos/dist/aos.css";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../../assets/img/top_img', false, /\.(png|jpe?g|svg)$/));

export const Features = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  const titleCard = t("features.titleCard", { returnObjects: true });
  return (
    <div id="features" className="text-center features-container">
      {" "}
      <div className="container-content-header container-features-header fadeInDown">
        <h2 className="header">{t("features.title")}</h2>
        <div className="header-content">
          <p className="">{t("features.paragraph")}</p>
        </div>
      </div>
      <div className="bottom"></div>
      <div className="container-content-features">
        <div className="card-content-container card-content-1">
          <div className="content-features mb-5">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="card-content"
            >
              <div className="img-card-content">
                <img src={images[titleCard[0]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[0]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[0]?.description}</p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="card-content"
            >
              <div className="img-card-content">
                <img src={images[titleCard[1]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[1]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[1]?.description}</p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="card-content"
            >
              {" "}
              <div className="img-card-content">
                <img src={images[titleCard[2]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[2]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[2]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-features">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="card-content card-block"
            >
              {" "}
              <div className="img-card-content">
                <img src={images[titleCard[3]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[3]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[3]?.description}</p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="card-content"
            >
              {" "}
              <div className="img-card-content">
                <img src={images[titleCard[4]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[4]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[4]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-content-container card-content-2">
          <div className="content-features mb-5">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[0]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[0]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[0]?.description}</p>
                </div>
              </div>
            </div>
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[1]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[1]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[1]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-features mb-5">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[2]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[2]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[2]?.description}</p>
                </div>
              </div>
            </div>
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[3]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[3]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[3]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-features">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[4]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[4]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[4]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-content-container card-content-3">
          <div className="content-features mb-5">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[0]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[0]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[0]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-features mb-5">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[1]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[1]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[1]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-features mb-5">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[2]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[2]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[2]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-features mb-5">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[3]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[3]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[3]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-features mb-5">
            <div
              className="card-content"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="img-card-content">
                <img src={images[titleCard[4]?.src]} />
              </div>
              <div className="card-content-description">
                <div className="card-header">
                  <h2>{titleCard[4]?.title}</h2>
                </div>
                <div className="card-description">
                  <p>{titleCard[4]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="content-features">
          <div className="card-content"></div>
          <div className="card-content"></div>
        </div>
        <div className="content-features">
          <div className="card-content"></div>
          <div className="card-content"></div>
        </div>
        <div className="content-features">
          <div className="card-content"></div>
        </div> */}
      </div>
    </div>
  );
};
