import React from "react";
import s from "Main/Main.module.scss";
import { ParticlesComponent } from "comman/components/Particles/ParticlesComponent";

const Main = () => {
  return (
    <div className={s.main}>
      <ParticlesComponent />
      <div className={s.container}>
        <div className={s.greeting}>
          <span>Hi There!</span>
          <span>
            I am <span>Yauheni Liasun</span>
          </span>
          <h1 className={s.text}>Front-end Developer</h1>
        </div>
        <div className={s.photo}>
          <div className={s.image}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
