import React from "react";
import s from "./Skills.module.scss";
import { Skill } from "Skills/Skill/Skill";
import { Title } from "comman/components/Title/Title";
import { Fade } from "react-awesome-reveal";
import js from "assets/icon/skills/js.png";
import jest from "assets/icon/skills/jest.png";
import mui from "assets/icon/skills/mui.png";
import next from "assets/icon/skills/next.png";
import postman from "assets/icon/skills/postman.png";
import react from "assets/icon/skills/react.png";
import restApi from "assets/icon/skills/restApi.png";
import toolkit from "assets/icon/skills/toolkit.png";
import ts from "assets/icon/skills/ts.png";
import hookForm from "assets/icon/skills/rhform.png";
import storybook from "assets/icon/skills/storybook.png";
import axios from "assets/icon/skills/axios.png";
import sass from "assets/icon/skills/sass.png";
import rrd from "assets/icon/skills/rrd.png";
import html from "assets/icon/skills/HTML5.png";
import ant from "assets/icon/skills/ant-design.svg";

type SkillsType = {
  src: string;
  title: string;
};

const mainSkills: SkillsType[] = [
  { src: react, title: "React" },
  { src: toolkit, title: "Redux/Toolkit/RTK" },
  { src: ts, title: "TS" },
  { src: js, title: "JS" },
];

const otherSkills: SkillsType[] = [
  { src: next, title: "Next" },
  { src: restApi, title: "Rest API" },
  { src: axios, title: "Axios" },
  { src: rrd, title: "React-router-dom" },
  { src: hookForm, title: "React-hook-forms" },
  { src: jest, title: "Jest" },
  { src: html, title: "HTML5" },
  { src: mui, title: "MUI" },
  { src: ant, title: "Ant Design" },
  { src: postman, title: "Postman" },
  { src: storybook, title: "Storybook" },
  { src: sass, title: "sass/scss/css" },
];

const listMainSkills = mainSkills.map((i, index) => (
  <Skill key={index} width={160} src={i.src} title={i.title} />
));
const listOtherSkills = otherSkills.map((i, index) => (
  <Skill key={index} width={80} src={i.src} title={i.title} />
));

const Skills = () => {
  return (
    <div className={s.container} id={"skills"}>
      <Title title={"Skills"} />
      <Fade direction={"left"}>
        <div className={s.skills}>{listMainSkills}</div>
      </Fade>
      <Fade direction={"right"}>
        <div className={`${s.skills} ${s.skillsOther}`}>{listOtherSkills}</div>
      </Fade>
    </div>
  );
};

export default Skills;
