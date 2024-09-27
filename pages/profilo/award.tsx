import Image from "next/image";

import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/award.module.scss";
import pic from "@/public/award/pic.jpg";
import award_1 from "@/public/award/1101103 評核證書-銅牌(展延).jpg";
import award_2 from "@/public/award/20221027 0069652-ISO 9001-QMS-ENGUS-UKAS.jpg";
import award_3 from "@/public/award/2022年 0069653-ISO.jpg";
import award_4 from "@/public/award/感謝狀-國立蘇澳高級海事水產職業學校1110908.jpg";
import award_5 from "@/public/award/1111203 冷凍空調技師公會-感謝狀.jpg";

export default function Award() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>獎項與證書</h1>
          <ul>
            <li>
              <p className={styles.highline}>銅牌</p>
              <p>
                評核證書
                <span className={styles.date}>110/11/03</span>
              </p>
            </li>
            <li>
              <p className={styles.highline}>LRQA</p>
              <p>
                GREEN PARTNERS INDUSTRY CO., LTD
                <span className={styles.date}>ISO 9001:2015</span>
              </p>
            </li>
            <li>
              <p className={styles.highline}>LRQA</p>
              <p>
                GREEN PARTNERS INDUSTRY CO., LTD
                <span className={styles.date}>ISO 45001:2018</span>
              </p>
            </li>
            <li>
              <p className={styles.highline}>感謝狀</p>
              <p>
                國立蘇澳高級海事水產職業學校
                <span className={styles.date}>111/09/08</span>
              </p>
            </li>
            <li>
              <p className={styles.highline}>感謝狀</p>
              <p>
                冷凍空調技師公會
                <span className={styles.date}>111/12/03</span>
              </p>
            </li>
          </ul>
          <div className={styles.credentailWrap}>
            <Image src={award_1} alt={""}></Image>
            <Image src={award_2} alt={""}></Image>
            <Image src={award_3} alt={""}></Image>
            <Image src={award_4} alt={""}></Image>
            <Image src={award_5} alt={""}></Image>
          </div>
        </section>
      </div>
    </Layout>
  );
}
