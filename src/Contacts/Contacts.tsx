import React from "react";
import s from "./Contacts.module.scss";
import { Title } from "comman/components/Title/Title";
import { Fade } from "react-awesome-reveal";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailSendAPI, FormsType } from "api/emailSendAPI";
import { toast } from "react-toastify";

const EMAIL_REGEX = /^\w[\w-.]*@[\w-]+\.[a-z]{2,7}$/i;

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormsType>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<FormsType> = (data) => {
    if (!data.name || !data.email) return;
    const id = toast.loading("Please wait...");

    emailSendAPI
      .send(data)
      .then(() => {
        toast.update(id, {
          render: "Message sent successfully",
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 8000,
        });
      })
      .catch(() => {
        toast.update(id, {
          render: "Something went wrong :( Please contact me in another way",
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 8000,
        });
      });
  };

  return (
    <div className={s.container} id={"contacts"}>
      <Title title={"Contacts"} />
      <Fade direction={"down"} damping={0.3}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder={"name"}
            autoComplete={"off"}
            className={s.input}
          />
          <input
            {...register("email", { pattern: EMAIL_REGEX })}
            type="text"
            placeholder={"email"}
            autoComplete={"off"}
            className={s.input}
          />
          {errors?.email?.type === "pattern" && <p>Email must be a valid</p>}
          <textarea
            {...register("message")}
            placeholder={"your message"}
            className={s.textarea}
          />
          <div className={s.containerButton}>
            <button type={"submit"} className={s.button}>
              Send
            </button>
          </div>
        </form>
      </Fade>
    </div>
  );
};

export default Contacts;
