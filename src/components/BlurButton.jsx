"use client";
import React from "react";

const BlurButton = ({ children }) => {
  const [blur, setBlur] = React.useState(true);

  return (
    <button
      onClick={() => setBlur((bool) => !bool)}
      className={blur ? "censored" : ""}
    >
      {children}
    </button>
  );
};

export default BlurButton;
