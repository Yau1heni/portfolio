import { FC } from "react";
import s from "./SocialIcon.module.scss";

export const SocialIcon: FC<SocialIconPropsType> = ({ href, srcIcon }) => {
  return (
    <div className={s.iconContainer}>
      <a href={href} target={"_blank"}>
        <img src={srcIcon} alt="icon" />
      </a>
    </div>
  );
};

type SocialIconPropsType = {
  href: string;
  srcIcon: string;
};
