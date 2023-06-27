import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assests/index";

const ContactLeft = () => {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Saurabh Kohade</h3>
        <p className="text-lg font-normal text-gray-400">
          Java Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Have a question or an exciting opportunity? Don't hesitate to get in
          touch. I'm just a message away!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+917030479668</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">saurabh.kohade@outlook.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
