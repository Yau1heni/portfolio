import { FC } from "react";
import s from "./Button.module.scss";

export const Button: FC<ButtonPropsType> = ({ text, href }) => {
  return (
    <a href={href} className={s.button} target="_blank">
      {text}
    </a>
  );
};

type ButtonPropsType = {
  text: string;
  href: string;
};
