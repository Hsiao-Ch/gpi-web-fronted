import { TbInfoHexagon, TbRulerMeasure } from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";

import styles from "@/styles/components/home/service.module.scss";

export default function Service() {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>服務項目</h2>
      </div>
      <div className={styles.wrap}>
        <div className={styles.items}>
          <div className={styles.icon}>
            <TbInfoHexagon />
          </div>
          <div>
            <p className={styles.subTitle}>技術諮詢</p>
            <p className={styles.content}></p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <TbRulerMeasure />
          </div>
          <div>
            <p className={styles.subTitle}>性能測量</p>
            <p className={styles.content}></p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.icon}>
            <GiAutoRepair />
          </div>
          <div>
            <p className={styles.subTitle}>保養維修</p>
            <p className={styles.content}></p>
          </div>
        </div>
      </div>
    </section>
  );
}
