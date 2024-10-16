import ContactInfo from "@/components/common/ContactInfo";
import Layout from "@/components/layout/Layout";
import SidebarInfo from "@/components/layout/SidebarInfo";
import styles from "@/styles/pages/contact.module.scss";

export default function ContactUs() {
  return (
    <Layout>
      <div className={styles.container}>
        <SidebarInfo />
        <section className={styles.section}>
          <h1 className={styles.title}>聯絡我們</h1>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7228.638229626056!2d121.443777!3d25.057171!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzI1LjgiTiAxMjHCsDI2JzM3LjYiRQ!5e0!3m2!1szh-TW!2sus!4v1729064683041!5m2!1szh-TW!2sus"
              width="100%"
              height="450"
            ></iframe>
          </div>
          <div className={styles.wrap}>
            <ContactInfo />
          </div>
        </section>
      </div>
    </Layout>
  );
}
