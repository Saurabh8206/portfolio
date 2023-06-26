import React from "react";
import { LeftBanner } from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-20 pb-10 flex border-b-[1px] border-b-gray font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
