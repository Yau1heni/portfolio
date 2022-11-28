import React from 'react';
import s from './Footer.module.css';
import styleContainer from '../../src/command/styles/Container.module.css';

const Footer = ({name}: { name: string }) => {
    return (
            <div className={s.footerBlock}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <h3>{name}</h3>
                    <div className={s.containerItems}>
                        <div className={s.item}>1</div>
                        <div className={s.item}>2</div>
                        <div className={s.item}>3</div>
                        <div className={s.item}>4</div>
                        <div className={s.item}>5</div>
                    </div>
                    <h4>©2022</h4>
                </div>
            </div>
    );
};

export default Footer;