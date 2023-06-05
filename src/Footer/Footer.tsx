import React from "react";
import s from "Footer/Footer.module.scss";
import { SocialIcon } from "comman/components/SocialIcon/SocialIcon";
import { socialData } from "Footer/socialData";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  const socialIconList = socialData.map((icon) => {
    return (
      <SocialIcon href={icon.iconHref} srcIcon={icon.iconSrc} key={icon.id} />
    );
  });

  return (
    <div className={s.footer}>
      <Fade direction={"down"}>
        <div className={s.footerContainer}>
          <h2>Yauheni</h2>
          <div className={s.containerItems}>{socialIconList}</div>
          <p>©2023. All rights reserved</p>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
