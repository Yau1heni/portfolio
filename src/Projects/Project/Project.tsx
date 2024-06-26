import s from "./Project.module.scss";
import { Button } from "comman/components/Button/Button";

type ProjectPropsType = {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  stack: string;
};

const Project = ({
  title,
  description,
  imageUrl,
  projectLink,
  stack,
}: ProjectPropsType) => {
  return (
    <div className={s.project}>
      <div className={s.imgContainer}>
        <img src={imageUrl} alt={title} className={s.img} />
        <Button text={"Open"} href={projectLink} />
      </div>
      <div className={s.descriptionContainer}>
        <h3 className={s.projectTitle}>{title}</h3>
        <span>{description}</span>
        <span>Stack: {stack}</span>
      </div>
    </div>
  );
};

export default Project;
