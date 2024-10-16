import styles from "@/styles/components/common/contactInfo.module.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type FormInputs = {
  name: string;
  email: string;
  message: string;
  tel: string;
};

export default function ContactInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [loading, setLoading] = useState<boolean>(false);
  const [messase, setMessage] = useState<string>("");

  const SERVICE_ID = "service_xci1lye";
  const TEMPLATE_ID = "template_4dhsmx1";
  const PUBLICK_ID = "xzbGKMfhI6DURxMFU";

  const onSubmit = (data: FormInputs) => {
    setLoading(true);
    setTimeout(() => {
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: data.name,
            to_name: "松鴻興業股份有限公司",
            from_email: data.email,
            to_email: "11336006@ntub.edu.tw",
            message: data.message,
            tel: data.tel
          },
          PUBLICK_ID
        )
        .then(() => setMessage("傳送成功"))
        .catch(() => setMessage("傳送失敗，請聯絡我們"));
      setLoading(false);
    }, 1000);
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.inputItem}>
          <input
            type="text"
            placeholder={`${
              errors.name ? "*" + errors.name.message : "您的名字"
            }`}
            {...register("name", { required: "請輸入您的名字" })}
          />
        </p><p className={styles.inputItem}>
          <input
            type="tel"
            placeholder={`${
              errors.tel ? "*" + errors.tel.message : "您的連絡電話"
            }`}
            {...register("tel", { required: "請輸入您的連絡電話" })}
          />
        </p>
        <p className={styles.inputItem}>
          <input
            type="email"
            placeholder={`${
              errors.email ? "*" + errors.email.message : "您的電子郵件"
            }`}
            {...register("email", { required: "請輸入您的電子郵件" })}
          />
        </p>
        <p className={styles.inputItem}>
          <textarea
            placeholder={`${
              errors.message ? "*" + errors.message.message : "您的您的留言"
            }`}
            {...register("message", { required: "請輸入您的留言" })}
          />
        </p>
        <p className={styles.submitWrap}>
          {messase}
          <button className={styles.submitButton}>
            {loading ? "傳送中..." : "傳送電子郵件"}
          </button>
        </p>
      </form>
    </section>
  );
}
