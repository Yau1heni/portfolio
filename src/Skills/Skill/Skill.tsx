import React from "react";
import s from "Skills/Skill/Skill.module.scss";

type SkillPropsType = {
  src: string;
  title: string;
  width?: number;
};

export const Skill = ({ title, src, width }: SkillPropsType) => {
  return (
    <div className={s.skill}>
      <img className={s.image} width={width} src={src} />
      <span className={s.description}>{title}</span>
    </div>
  );
};
