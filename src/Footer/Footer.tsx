import React from "react";
import s from "Footer/Footer.module.scss";
import { SocialIcon } from "comman/components/SocialIcon/SocialIcon";
import { socialData } from "Footer/socialData";

const Footer = () => {
  const socialIconList = socialData.map((icon) => {
    return <SocialIcon href={icon.iconHref} srcIcon={icon.iconSrc} />;
  });

  return (
    <div className={s.footer}>
      <div className={s.footerContainer}>
        <h2>Yauheni</h2>
        <div className={s.containerItems}>{socialIconList}</div>
        <p>©2023. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
