import React from "react";

export const Input = ({ t, placeholder, type, register }) => {
  return (
    <input
      className="input-form mb-2"
      type={type}
      placeholder={placeholder}
      {...register}
    ></input>
  );
};
