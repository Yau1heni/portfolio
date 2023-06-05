import React from "react";
import s from "Nav/Nav.module.scss";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={s.nav}>
      <Link activeClass={s.active} to={"main"} spy>
        Main
      </Link>
      <Link activeClass={s.active} to={"skills"} spy>
        Skills
      </Link>
      <Link activeClass={s.active} to={"projects"} spy>
        Projects
      </Link>
      <Link activeClass={s.active} to={"contacts"} spy>
        Contacts
      </Link>
    </div>
  );
};

export default Nav;

