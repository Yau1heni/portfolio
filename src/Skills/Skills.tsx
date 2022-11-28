import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../command/styles/Container.module.css';
import Skill from './Skill/Skill';
import t from '../command/styles/Title.module.css';

const Skills = () => {
    return (
            <div className={s.skillsBlock}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <h2 className={t.title}>Skills</h2>
                    <div className={s.skills}>
                        <Skill title="JS" description="description
                    ......... ........... .................. .........
                    ..................... ............. ..............
                    ............... ................... ............
                    ........ ................. ............"/>
                        <Skill title="React" description="description..."/>
                        <Skill title="CS" description="description..."/>
                        <Skill title="Redux" description="description..."/>
                        <Skill title="Git" description="description..."/>
                    </div>
                </div>
            </div>
    );
};

export default Skills;