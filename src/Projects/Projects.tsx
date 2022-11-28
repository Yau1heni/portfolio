import React from 'react';
import s from './Projects.module.css';
import styleContainer from '../command/styles/Container.module.css';
import Project from './Project/Project';
import t from '../command/styles/Title.module.css';

const Projects = () => {
    return (
            <div className={s.projectsBlock}>
                <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                    <h2 className={t.title}>My projects</h2>
                    <div className={s.projects}>
                        <Project title="Todolist" description="Some description...
                    sfsdsdfsdfsd sdfdsfsdfsdf  sfdfsdfsdfds wefsfsfsdddd
                    ddddddddddd dddddddddd ddddd dddddddd dddddddd"/>
                        <Project title="Social network" description="Some description..."/>
                    </div>
                </div>
            </div>
    );
};

export default Projects;