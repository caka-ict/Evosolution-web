import React from "react";

export const TextArena = ({ placeholder, register, name }) => {
  return (
    <textarea
      className="text-arena"
      cols="90"
      rows="5"
      placeholder={placeholder}
      name={name}
      {...register}
    ></textarea>
  );
};
