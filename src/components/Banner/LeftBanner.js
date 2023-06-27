import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaReact,
  FaGithub,
  FaJava,
  FaAws,
  FaDatabase,
  FaInstagram,
} from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
export const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer.",
      "Java Developer.",
      "Backend Developer.",
      "Java Full Stack Developer.",
      "React Developer.",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize"> Saurabh Kohade</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 -tracking-tighter">
          A Software developer with a passion for full-stack development.
          Currently, I am expanding my skill set to include
          <span className="text-blue-400"> React </span>
          and aspiring to become a <span> </span>
          <b className="text-designColor">Java Full Stack Developer.</b> With a
          solid foundation in Java development, I have gained proficiency in
          building robust and scalable backend systems.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <br />
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find ME IN
          </h2>
          <div className="flex ga-4">
            <span className="bannerIcon">
              <button
                onClick={() => openLink("https://www.facebook.com/skohade1/")}
                className="bannerIcon"
              >
                <FaFacebookF />
              </button>
            </span>
            <button
              onClick={() =>
                openLink("https://www.instagram.com/_saurabh_kohade/")
              }
              className="bannerIcon"
            >
              <FaInstagram />
            </button>
            <button
              onClick={() => openLink("https://twitter.com/saurabh_kohade")}
              className="bannerIcon"
            >
              <FaTwitter />
            </button>

            <button
              onClick={() => openLink("https://github.com/Saurabh8206")}
              className="bannerIcon"
            >
              <FaGithub />
            </button>
          </div>
        </div>
        <div>
          <br />

          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLS
          </h2>

          <div className="flex ga-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <BiLogoSpringBoot />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaDatabase />
            </span>
            <span className="bannerIcon">
              <FaAws />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
