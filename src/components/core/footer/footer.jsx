import React, { useContext, useEffect, useRef, useState } from "react";
import "./footer.css";
import aos from "aos";
import { useForm } from "react-hook-form";
import { Input } from "../../share/input/input";
import emailjs from "@emailjs/browser";
import { CONFIG_EMAILJS } from "../../../configEmailjs";
import { ModalNotify } from "../../share/modal/modal";
import { Errors } from "../../share/errors/errors";
import ClipLoader from "react-spinners/ClipLoader";
import { MainContext } from "../../../context/content";
import { TextArena } from "../../share/input/textArena";

export const Footer = ({ t }) => {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(true);
  const [isSpinner, setIsSpinner] = useState(false);
  const [message, setMessage] = useState("");

  const { action, setAction } = useContext(MainContext);

  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  const onSubmit = (data) => {
    sendEmail();
  };

  const sendEmail = (e) => {
    // setIsSpinner(true);
    // emailjs
    //   .sendForm(
    //     CONFIG_EMAILJS.service_id,
    //     CONFIG_EMAILJS.tempalate_id,
    //     form.current,
    //     CONFIG_EMAILJS.public_key
    //   )
    //   .then(
    //     (result) => {
    //       setShowModal(true);
    //       setSuccess(true);
    //       console.log("ok");
    //       setIsSpinner(false);
    //       setMessage("notify.success");
    //     },
    //     (error) => {
    //       setSuccess(false);
    //       setShowModal(true);
    //       setMessage("notify.success");
    //     }
    //   );
  };

  const closeModal = () => {
    setShowModal(false);
    if (action === "close") {
      reset(
        {
          fullname: "",
          email: "",
          phoneNumber: "",
        },
        {
          keepDirty: true,
        }
      );
    }
  };

  return (
    <div id="contact" className="footer-container">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        className="container-content-header footer-content"
      >
        <h1>{t("footer.title")}</h1>
        <div className="bottom"></div>
      </div>
      <div className="footer-form-contact">
        <form
          ref={form}
          className="footer-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-input">
            <Input
              t={t}
              placeholder={t("footer.placeholder.name.content")}
              type={"string"}
              register={{
                ...register("fullname", { required: true, minLength: 2 }),
              }}
              name={"fullname"}
            />
            <Errors
              t={t}
              errors={errors}
              typeValidate={"required"}
              name={"fullname"}
            />
            <Errors
              t={t}
              errors={errors}
              typeValidate={"minLength"}
              name={"fullname"}
            />
          </div>

          <div className="form-input">
            <Input
              placeholder={t("footer.placeholder.email.content")}
              type={"string"}
              register={{
                ...register("email", {
                  required: true,
                  pattern: /^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/,
                }),
              }}
              name={"email"}
            />
            <Errors
              t={t}
              errors={errors}
              typeValidate={"required"}
              name={"email"}
            />
            <Errors
              t={t}
              errors={errors}
              typeValidate={"pattern"}
              name={"email"}
            />
          </div>

          <div className="form-input">
            <Input
              placeholder={t("footer.placeholder.phone.content")}
              type={"string"}
              register={{
                ...register("phoneNumber", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                  pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                }),
              }}
              name={"phoneNumber"}
            />
            <Errors
              errors={errors}
              typeValidate={"required"}
              name={"phoneNumber"}
              t={t}
            />
            <Errors
              errors={errors}
              typeValidate={"minLength"}
              name={"phoneNumber"}
              t={t}
            />
            <Errors
              errors={errors}
              typeValidate={"maxLength"}
              name={"phoneNumber"}
              t={t}
            />
            <Errors
              errors={errors}
              typeValidate={"pattern"}
              name={"phoneNumber"}
              t={t}
            />
          </div>
          <div className="form-input">
            <TextArena
              placeholder={t("footer.placeholder.message.content")}
              type={"string"}
              register={{ ...register("message") }}
              name={"message"}
            ></TextArena>
          </div>
          <div className="button-submit">
            <button type="submit">
              {isSpinner ? (
                <ClipLoader color={"#fff"}></ClipLoader>
              ) : (
                <span>{t("footer.submit.content")}</span>
              )}
            </button>
          </div>
        </form>
        <div className="footer-contact">
          <div className="contact mb-5">
            <h1>{t("footer.form_contact.address.label")}</h1>
            <p>{t("footer.form_contact.address.content")}</p>
            <div className="map">
              <a href="https://goo.gl/maps/VfHeQ75nqoWx7fAz5" target="_blank">
                {t("footer.form_contact.address.map")}
              </a>
            </div>
          </div>
          <div className="contact mb-5">
            <h1>{t("footer.form_contact.email.label")}</h1>
            <div className="email">
              <a href="mailto:trantoan110119996@gmail.com" target="_blank">
                {t("footer.form_contact.email.content")}
              </a>
            </div>
          </div>
          <div className="contact mb-5">
            <h1>{t("footer.form_contact.phone.label")}</h1>
            <p>{t("footer.form_contact.phone.content")}</p>
          </div>
          <div className="contact">
            <h1>{t("footer.form_contact.work_hours.label")}</h1>
            <p>{t("footer.form_contact.work_hours.content")}</p>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalNotify
          t={t}
          showModal={showModal}
          closeModal={closeModal}
          success={success}
          message={message}
          setAction={setAction}
        />
      )}
    </div>
  );
};
