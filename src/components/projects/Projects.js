import React from "react";
import Title from "../Layouts/Title";
import { ProjectCard } from "./ProjectCard";
import {
  Fullstack,
  Spotify,
  Weather,
  restraunt,
  jenkins,
  twitterClone
} from "../../assests/index";

const Projects = () => {

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Projects" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="SPRING + TWITTER APIs"
          des="Springboot application consuming twitter Apis.
          Twitter Clone Backend"
          src={twitterClone}
          githubUrl="https://github.com/Saurabh8206/DICE"
        />
        <ProjectCard
          title="SPRING + JENKINS"
          des="SpringBoot application deployed to jenkins."
          src={jenkins}
          githubUrl="https://github.com/Saurabh8206/springboot-jenkins"
        />
        <ProjectCard
          title="BE Restraunt APP"
          des="Restraunt Management application with backend APIs in Spring Boot."
          src={restraunt}
          githubUrl="https://github.com/Saurabh8206/RestrauntApp"
        />
        <ProjectCard
          title="BE Weather App"
          des="SpringBoot Application with backend APIs cosuming the rapidApi integration with Forecast Api."
          src={Weather}
          githubUrl="https://github.com/Saurabh8206/WeatherApp"
        />

        <ProjectCard
          title="SPRING + REACT"
          des="FullStack User Management application based on React and Spring Boot with CRUD operations."
          src={Fullstack}
          githubUrl="https://github.com/Saurabh8206/fullstack_backend"
        />
        <ProjectCard
          title="Spotify clone"
          des="Spotify clone for Best of PRATEEK KUHAD playlist - using HTML/Css/Js with Mp3 track"
          src={Spotify}
          githubUrl="https://github.com/Saurabh8206/Spotify_clone"
        />
      </div>
    </section>
  );
};

export default Projects;
