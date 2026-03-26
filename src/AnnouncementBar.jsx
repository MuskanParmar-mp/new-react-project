import React from "react";
import Marquee from "react-fast-marquee";

function AnnouncementBar() {
  return (
    <div className="bg-orange-500 text-white gap-21 p-16"  >
      
      <Marquee speed={50} gradient={false} >
        🔥 Flat 20% OFF on all products &nbsp;&nbsp;&nbsp;
        🚚 Free Shipping above ₹499 &nbsp;&nbsp;&nbsp;
        ⏳ Limited Time Offer &nbsp;&nbsp;&nbsp;
        💥 Buy 2 Get 1 Free
      </Marquee>

    </div>
  );
}

export default AnnouncementBar;