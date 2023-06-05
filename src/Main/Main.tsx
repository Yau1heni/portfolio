import React from "react";
import s from "./Main.module.scss";
import { ParticlesComponent } from "comman/components/Particles/ParticlesComponent";
import ReactTypingEffect from "react-typing-effect";
import { Tilt } from "react-tilt";
import { titlOptions } from "Main/titlOptions";

const Main = () => {
  return (
    <div className={s.main} id={"main"}>
      <ParticlesComponent />
      <div className={s.container}>
        <div className={s.greeting}>
          <span>Hi There!</span>
          <span>
            I am <span>Yauheni Liasun</span>
          </span>
          <ReactTypingEffect text={["Front-end Developer."]} />
        </div>

        <Tilt options={titlOptions}>
          <div className={s.photo}>
            <div className={s.image}></div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Main;
