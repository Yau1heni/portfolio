import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
            <div className={s.nav}>
                <a>Main</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contacts</a>
            </div>
    );
};

export default Nav;