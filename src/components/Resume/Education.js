import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's Degeree - Mechanical"
            subTitle="PVPIT, Pune (2017 - 2020)"
            result="8.11 SGPA"
            des="Completed a Bachelor's degree program in Mechanical Engineering from Padmabhooshan Vasantraodada Patil Institute of Technology Pune."
          />
          <ResumeCard
            title="Diploma - Mechanical"
            subTitle="V.Y.W.S Polytecnic Badnera (2014 - 2017)"
            result="70.00%"
            des="Earned a diploma in Mechanical Engineering from V.Y.W.S Polytecnic Badnera."
          />
          <ResumeCard
            title="Secondary School Certificate - SSC"
            subTitle="Bhonsala Military School Nashik (2014)"
            result="62.60%"
            des="Successfully completed secondary education with 62.60 from Bhonsala Military School Nashik."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
