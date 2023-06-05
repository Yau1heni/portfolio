import React from "react";
import s from "Contacts/Contacts.module.scss";
import { Title } from "comman/components/Title/Title";
import { Fade } from "react-awesome-reveal";

const Contacts = () => {
  return (
    <div className={s.container} id={"contacts"}>
      <Title title={"Contacts"} />
      <form className={s.form}>
        <Fade cascade damping={0.3}>
          <input
            type="text"
            placeholder={"name"}
            autoComplete={"off"}
            className={s.input}
          />
          <input
            type="text"
            placeholder={"email"}
            autoComplete={"off"}
            className={s.input}
          />
          <textarea placeholder={"your message"} className={s.textarea} />
          <div className={s.containerButton}>
            <button type={"submit"} className={s.button}>
              Send
            </button>
          </div>
        </Fade>
      </form>
    </div>
  );
};

export default Contacts;
