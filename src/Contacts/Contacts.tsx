import React from "react";
import s from "Contacts/Contacts.module.scss";
import { Title } from "comman/components/Title/Title";

const Contacts = () => {
  return (
    <div className={s.container}>
      <Title title={"Contacts"} />
      <form className={s.form}>
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
        <button type={"submit"} className={s.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contacts;
