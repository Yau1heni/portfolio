import React from "react";
import s from "./Projects.module.scss";
import Project from "./Project/Project";
import { Title } from "comman/components/Title/Title";
import todo from "./../assets/image/todo.jpg";
import cards from "./../assets/image/cards.jpg";
import burger from "./../assets/image/burger.jpg";
import { Fade } from "react-awesome-reveal";

const PROJECT_LINK = {
  TODO: "https://Yau1heni.github.io/todolist",
  CARDS: "https://Yau1heni.github.io/cards",
  BURGER_HOUSE: "https://yau1heni.github.io/burger-house",
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
              imageUrl={todo}
              title="Todolist"
              description="Application build with ReactJS/Redux-Toolkit/TypeScript/MUI/Storybook/Jest and etc."
            />
            <Project
              projectLink={PROJECT_LINK.CARDS}
              imageUrl={cards}
              title="Learning App"
              description="Application build with ReactJS/Redux-Toolkit/TypeScript/MUI/Formik and etc."
            />
            <Project
              projectLink={PROJECT_LINK.BURGER_HOUSE}
              imageUrl={burger}
              title="Burger house"
              description="Application build with Angular/SCSS"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
