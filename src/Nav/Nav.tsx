import React from "react";
import s from "./Nav.module.scss";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={s.nav}>
      <Link activeClass={s.active} offset={-10} to={"main"} spy>
        Main
      </Link>
      <Link activeClass={s.active} offset={-10} to={"skills"} spy>
        Skills
      </Link>
      <Link activeClass={s.active} offset={-10} to={"projects"} spy>
        Projects
      </Link>
      <Link activeClass={s.active} offset={-10} to={"contacts"} spy>
        Contacts
      </Link>
    </div>
  );
};

export default Nav;
