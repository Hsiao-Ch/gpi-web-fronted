import Image from "next/image";

import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/organization.module.scss";
import pic from "@/public/award/pic.jpg";
import organizationChart from "@/public/organizationChart.png";

export default function Organization() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>組織架構</h1>
          <div className={styles.chart}>
            <Image src={organizationChart} alt="組織架構圖" />
          </div>
        </section>
      </div>
    </Layout>
  );
}
