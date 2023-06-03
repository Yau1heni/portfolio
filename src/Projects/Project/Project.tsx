import React from "react";
import s from "Projects/Project/Project.module.scss";

type ProjectPropsType = {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
};

const Project = ({
  title,
  description,
  imageUrl,
  projectLink,
}: ProjectPropsType) => {
  return (
    <div className={s.project}>
      <div className={s.imgContainer}>
        <img src={imageUrl} alt={title} className={s.img} />
        <a href={projectLink} className={s.buttonLink} target="_blank">
          Open
        </a>
      </div>
      <div className={s.descriptionContainer}>
        <h3 className={s.projectTitle}>{title}</h3>
        <span className={s.description}>{description}</span>
      </div>
    </div>
  );
};

export default Project;
