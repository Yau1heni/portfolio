import { FC } from "react";
import s from "comman/components/Title/Title.module.scss";

export const Title: FC<PropsType> = ({ title }) => {
  return (
    <div className={s.title}>
      <h2>{title}</h2>
    </div>
  );
};

type PropsType = {
  title: string;
};
