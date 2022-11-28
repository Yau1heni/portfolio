import React from 'react';
import s from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
}

const Project = ({title, description}: ProjectPropsType) => {
    return (
            <div className={s.project}>
                <div className={s.imgContainer}>
                    <a className={s.btn}>Open</a>
                </div>
                <div className={s.title}>{title}</div>
                <span className={s.description}>{description}</span>

            </div>
    );
};

export default Project;