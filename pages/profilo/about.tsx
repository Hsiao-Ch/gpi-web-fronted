import { FaCheck, FaLocationArrow } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import Image from "next/image";

import styles from "@/styles/pages/about.module.scss";
import Layout from "@/components/layout/Layout";

import pic from "@/public/about/pic-5.jpg";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wordWrap}>
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>關於我們的幾句話</h2>
            <p className={styles.line}></p>
          </div>
          <p className={styles.wordContent}>
            我們主要從事空調設備，代理進口空調設備冷卻水塔及水處理設備；
            包含冷卻水塔、雜質分離器、微氣泡分離器、水處理設備等。
            本公司產品於國內外市場擁有廣大使用群，國內代表性企業皆為長期使用客戶。
            以銷售SPX
            Marley冷卻水塔及相關水處理產品Spirtech微氣泡處理機、Lakos雜質分離器，從事進出口貿易業務及安裝、
            設計、諮詢與維修業務。
          </p>
          <div className={styles.wordItems}>
            <div className={styles.item}>
              <p className={styles.icon}>
                <FaCheck />
              </p>
              <p className={styles.subTitle}>為什麼選擇我們</p>
              <p className={styles.content}>
                我們堅持品質與安全，並通過了多項國際認證，確保提供最專業的服務。
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.icon}>
                <FaLocationArrow />
              </p>
              <p className={styles.subTitle}>我們的使命</p>
              <p className={styles.content}>
                我們的使命是透過資源永續、效益和創新的理念，為客戶提供卓越的空調及水處理服務，同時推動社會和諧與環境永續發展。
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.icon}>
                <FaListCheck />
              </p>
              <p className={styles.subTitle}>我們的願景</p>
              <p className={styles.content}>
                我們將透過創新服務，善用地球資源，打造一個永續和諧的環境，並不斷提升我們的供應鏈管理和業務效益。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.aboutWrap}>
          <div className={styles.contentWrap}>
            <div className={styles.titleWrap}>
              <h2 className={styles.title}>關於松鴻興業</h2>
              <p className={styles.line}></p>
            </div>
            <p className={styles.subTitle}>空調與水處理解決方案領航者</p>
            <p>
              松鴻興業股份有限公司成立於民國98年，專營空調及水處理設備，廣泛應用於電子產業、商辦、飯店等領域。
              我們致力於高品質產品與專業服務，並獲ISO9001及ISO45001認證。
              以資源永續、效益及創新為經營理念，持續推動技術創新與專業提升，為客戶提供最佳解決方案。
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image src={pic} alt={""} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
