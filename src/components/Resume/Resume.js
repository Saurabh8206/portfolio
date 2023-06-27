import React, { useState } from "react";
import Title from "../Layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-gray">
      <div className="flex justify-center items-center text-center">
        <Title title="Software Developer" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>

          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
        </ul>
      </div>
      {skillData && <Skills />}
      {educationData && <Education />}
      {experienceData && <Experience />}
      <div className="flex justify-center items-center text-center">
        <Title
          title=" "
          des={
            <>
              <button
                onClick={() =>
                  openLink(
                    "https://1drv.ms/b/s!Aqyskr-hyCwZdlFJH3urJBoAaJM?e=UODI4R"
                  )
                }
                className="text-designColor underline"
              >
                Download
              </button>
            </>
          }
        />
      </div>
    </section>
  );
};

export default Resume;
