import React, { Fragment } from "react";

export const Errors = ({ t, errors, typeValidate, name }) => {
  return (
    <Fragment>
      {errors[name]?.type === typeValidate && (
        <span className="text-danger">
          {t(`formValidation.${name}.${typeValidate}`)}
        </span>
      )}
    </Fragment>
  );
};
