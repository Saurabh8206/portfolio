import React from 'react'
import { banner } from "../../assests/index";
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex bg-red justify-center items-center">
      <img
        className="w-[550px] h-[550px] z-10 rounded-full"
        src={banner}
        alt="banner"
      />
      
    </div>
  );
}

export default RightBanner