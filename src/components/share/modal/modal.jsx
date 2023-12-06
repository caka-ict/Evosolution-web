import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
export const ModalNotify = ({
  showModal,
  closeModal,
  message,
  t,
  setAction,
}) => {
  const handleClose = () => {
    closeModal();
    setAction("close");
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body className="modal-body">
          <span className="text-noti">{t(message)}</span>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-close-modal" onClick={handleClose}>
            {t("btnAction.close")}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
