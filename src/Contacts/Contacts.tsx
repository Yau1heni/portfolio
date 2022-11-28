import React from 'react';
import s from './Contacts.module.css';
import styleContainer from '../../src/command/styles/Container.module.css';
import t from '../command/styles/Title.module.css';

const Contacts = () => {
    return (
            <div className={s.contactsBlock}>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <h2 className={t.title}>Contacts</h2>
                    <form className={s.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    </form>
                    <button className={s.btn}>Send</button>
                </div>
            </div>
    );
};

export default Contacts;