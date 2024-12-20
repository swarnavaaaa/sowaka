"use client";
import useIsMobile from "@lib/utils/hooks";
import { InlineWidget } from "react-calendly";

const Calendly = () => {

  const {isMobile, width} = useIsMobile();
  return (
    <div>
<InlineWidget
pageSettings={{
    backgroundColor: 'ffffff',
    primaryColor: '2545a2',
  }}
url="https://calendly.com/swarnava000/individual-therapy-session" />
    </div>
  );
};

export default Calendly
;
