import Image from "next/image";
  
import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/alliances.module.scss";
import pic from "@/public/award/pic.jpg";

export default function Alliances() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>新聞稿專區</h1>
        </section>
      </div>
    </Layout>
  );
}
