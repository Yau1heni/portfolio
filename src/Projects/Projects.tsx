import React from "react";
import s from "./Projects.module.scss";
import Project from "./Project/Project";
import { Title } from "comman/components/Title/Title";
import { Fade } from "react-awesome-reveal";
import { projectsData } from "Projects/data/projectsData";

const projectsList = projectsData.map(
  ({ description, src, title, link, stack, id }) => (
    <Project
      key={id}
      description={description}
      imageUrl={src}
      title={title}
      projectLink={link}
      stack={stack}
    />
  )
);

const Projects = () => {
  return (
    <div className={s.projects} id={"projects"}>
      <div className={s.projectsContainer}>
        <Title title={"Projects"} />
        <Fade direction={"left"}>
          <div className={s.projectsContent}>{projectsList}</div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
