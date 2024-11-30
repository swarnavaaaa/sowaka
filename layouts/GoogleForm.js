"use client";
import useIsMobile from "@lib/utils/hooks";

const GoogleForm = () => {

  const {isMobile, width} = useIsMobile();
  return (
    <>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf2dHLl5qanicvuLvo7NLKfQH4GnqQRYMgxecGeOEVi76eEHg/viewform?embedded=true"
        width={(isMobile !== null && isMobile ) ? width - 30 : 640}
        height={isMobile? 1800 : 1200}
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
