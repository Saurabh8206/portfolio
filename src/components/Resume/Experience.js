import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Java Developer"
            subTitle="Tata Consultancy Services (TCS) -(Jan 2021 - Present)"
            result="Pune, Maharashtra"
            des={
              <>
                Developed and maintained using Spring Boot and MySQL, MongoDB
                databases.
                <br />
                Designed and implemented RESTful APIs using Spring Boot.
                <br />
                Integrated third-party APIs and services into applications.
                <br />
                Deployed applications using Jenkins, Docker, ArgoCD, Helm, and
                AWS Services.
                <br />
                Analyzing and fixing critical issues in the application.
                <br />
                Working closely with clients, Business Analysts, and development
                teams.
                <br />
                To help newly onboarded members with required knowledge
                transition and sessions.
              </>
            }
          />
          <ResumeCard
            title="Assistant System Engineer Trainee"
            subTitle="Tata Consultancy Services (TCS) -(June 2020 - Jan 2021)"
            result="Pune, Maharashtra"
            des={
              <>
                Completed an intensive Java training program, gaining hands-on
                experience with Java programming language, object-oriented
                programming concepts, and popular Java frameworks and libraries.
                Gained experience with tools and
                <br />
                Gained experience with tools and technologies such as Eclipse,
                Maven, and Tomcat, and developed skills in debugging, testing,
                and troubleshooting Java applications.
                <br />
                Developed and delivered presentations on Java-related topics,
                such as Java collections, Java concurrency, and Java web
                development
                
              </>
            }
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
