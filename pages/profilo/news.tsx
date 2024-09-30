import Image from "next/image";

import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/news.module.scss";
import pic from "@/public/award/pic.jpg";

export default function News() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>最新消息</h1>
          <p className={styles.intro}>即將推出</p>
        </section>
      </div>
    </Layout>
  );
}
