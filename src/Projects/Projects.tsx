import React from "react";
import s from "./Projects.module.scss";
import Project from "./Project/Project";
import { Title } from "comman/components/Title/Title";
import todoImg from "./../assets/image/todolist.png";
import { Fade } from "react-awesome-reveal";

const PROJECT_LINK = {
  TODO: "http://localhost:3001/",
};
const Projects = () => {
  return (
    <div className={s.projects} id={"projects"}>
      <div className={s.projectsContainer}>
        <Title title={"Projects"} />
        <Fade direction={"left"}>
          <div className={s.projectsContent}>
            <Project
              projectLink={PROJECT_LINK.TODO}
              imageUrl={todoImg}
              title="Todolist"
              description="Some descriptiddddv erg erg erdsererg reg er eg efv  vre veg e  adasda da ad aon...Lorem "
            />
            <Project
              projectLink={PROJECT_LINK.TODO}
              imageUrl={todoImg}
              title="Inctagram"
              description="Some description..."
            />
            <Project
              projectLink={PROJECT_LINK.TODO}
              imageUrl={todoImg}
              title="Cards"
              description="Some description..."
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
