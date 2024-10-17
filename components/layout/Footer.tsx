import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { FooterLinkData } from "@/lib/data/footerData";
import styles from "@/styles/components/layout/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footerWrap}>
        <div>
          <h2 className={styles.logo}>GPi</h2>
          <p style={{ fontWeight: "bold" }}>
            GREEN PARTNERS INDUSTRY CO., LTD.
          </p>
          <p>新北市新莊區新北大道4段217號3樓</p>
          <p>電話: 02-85213289</p>
          <p>傳真: 02-81926810</p>
          <p></p>
        </div>
        <div>
          <h2>相關連結</h2>
          <div className={styles.links}>
            {FooterLinkData.map((item, index) => (
              <Link key={index} href={item.link}>
                <FaArrowRight />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>關於我們</h2>
          <p className={styles.aboutContent}>
            我們主要從事空調設備，代理進口空調設備冷卻水塔及水處理設備；包含冷卻水
            塔、雜質分離器、微氣泡分離器、水處理設備等。本公司產品於國內外市場擁有廣大使
            用群，國內代表性企業皆為長期使用客戶。
          </p>
          <Link href={""}>閱讀更多</Link>
        </div>
      </div>
      <a href={'https://www.facebook.com/Marleycoolingtower/'}><FaFacebook  className={styles.fbIcon} /></a>
    </footer>
  );
}
