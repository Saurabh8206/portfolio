import React, { useState } from "react";
import { logo } from "../../assests/index";
import { navLinksData } from "../../constants/index";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} className="w-20 rounded-full" alt="logo" />
      </div>
      <div className="text-designColor font-bold text-5xl  font-bodyFont  capitalize">
        Saurabh Kohade
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32 rounded-2xl" src={logo} alt="logo" />
                <h1 className="text-3xl font-bold text-white">
                  Hi, I'm
                  <span className="text-designColor capitalize">
                    Saurabh Kohade
                  </span>
                </h1>
                <p className="text-sm text-gray-400 mt-2">
                  A Software developer with a passion for full-stack
                  development. Currently, I am expanding my skill set to include
                  <span className="text-blue-400"> React </span>
                  and aspiring to become a <span> </span>
                  <b className="text-designColor">
                    Java Full Stack Developer.
                  </b>{" "}
                  With a solid foundation in Java development, I have gained
                  proficiency in building robust and scalable backend systems.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksData.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex ga-4">
                  <span className="bannerIcon">
                    <button
                      onClick={() =>
                        openLink("https://www.facebook.com/skohade1/")
                      }
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
                    onClick={() =>
                      openLink("https://twitter.com/saurabh_kohade")
                    }
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
