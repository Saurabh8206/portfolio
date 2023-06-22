import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 border-b-[ipx] h-[800px] pb-20 flex  border-b-black font-titleFont"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor capitalize"> Saurabh Kohade</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>Java Full Stack Developer</span>
          </h2>
          <p className="text-base font-bodyFont leading-6 -tracking-tighter">
            A Software developer with a passion for full-stack development.
            Currently, I am expanding my skill set to include{" "}
            <span className="text-blue-400">React </span>
            and aspiring to become a{" "}
            <b className="text-designColor">Java Full Stack Developer.</b> With
            a solid foundation in Java development and <b>3</b> years of
            experience, I have gained proficiency in building robust and
            scalable backend systems.
          </p>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
