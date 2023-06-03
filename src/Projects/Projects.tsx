import React from "react";
import s from "Projects/Projects.module.scss";
import styleContainer from "comman/styles/Container.module.scss";
import Project from "./Project/Project";
import { Title } from "comman/components/Title/Title";
import todoImg from "./../assets/image/todolist.png";

const PROJECT_LINK = {
  TODO: "http://localhost:3001/",
};
const Projects = () => {
  return (
    <div className={`${styleContainer.container} ${s.projectsContainer}`}>
      <Title title={"Projects"} />
      <div className={s.projects}>
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
    </div>
  );
};

export default Projects;
