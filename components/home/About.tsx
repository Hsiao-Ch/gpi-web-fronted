import Image from "next/image";
import pic_4 from "@/public/about/pic-4.jpg";
import pic_2 from "@/public/about/pic-2.jpg";
import pic_3 from "@/public/about/pic-3.jpg";
import styles from "@/styles/components/home/about.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>關於我們</h2>
      </div>
      <div className={styles.wrap}>
        <div className={styles.items}>
          <div className={styles.image}>
            <Image src={pic_2} alt={""} />
          </div>
          <p className={styles.subTitle}>我們是誰</p>
          <p className={styles.content}>
            以「信任」為松鴻興業的核心價值：信是相信；任是當責。
          </p>
          <Link href="/profilo/about" className={styles.readMore}>
            了解更多
          </Link>
        </div>
        <div className={styles.items}>
          <div className={styles.image}>
            <Image src={pic_3} alt={""} />
          </div>
          <p className={styles.subTitle}>我們做什麼</p>
          <p className={styles.content}>
            致力於供應鏈與業務管理，以投入效益的觀點，善用地球資源，
            提供和諧永續環境的創新服務。
          </p>
          <Link href="/profilo/about" className={styles.readMore}>
            了解更多
          </Link>
        </div>
        <div className={styles.items}>
          <div className={styles.image}>
            <Image src={pic_4} alt={""} />
          </div>
          <p className={styles.subTitle}>我們如何工作</p>
          <p className={styles.content}></p>
          <Link href="/profilo/about" className={styles.readMore}>
            了解更多
          </Link>
        </div>
      </div>
    </section>
  );
}
