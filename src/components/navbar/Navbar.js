import React from "react";
import { logo} from "../../assests/index";
import { navLinksData } from "../../constants/index";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-gray-600 border-b-[1px] sticky bg-bodyColor z-50 top-0 ">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-20 justify-between rounded-full"
        />
        <div className="ml-2 font-bold text-4xl hover:text-designColor">
          Saurabh Kohade
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          {/* Destrucred the navLinkData object  */}
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                actionClass="active"
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
      </div>
    </div>
  );
};
