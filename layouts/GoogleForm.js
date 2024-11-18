"use client";
import { useState, useRef } from "react";

const GoogleForm = () => {
  return (
    <>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf2dHLl5qanicvuLvo7NLKfQH4GnqQRYMgxecGeOEVi76eEHg/viewform?embedded=true"
        width="640"
        height={1200}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </>
  );
};

export default GoogleForm;
