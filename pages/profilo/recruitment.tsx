import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/recruitment.module.scss";
import pic from "@/public/award/pic.jpg";

const content = [
  {
    project: [
      "設備組裝專案⼯程管理",
      "設備維修案件管理",
      "專案⼯程溝通協調、施⼯進度控管",
      "專案施⼯查檢、品質管理",
      "現場⼯程監⼯、巡檢稽核及安全衛⽣事項",
      "與業務單位的溝通及案件銜接",
    ],
    domestic: [
      "負責進口空調設備銷售及市場開發",
      "開發客戶、客戶拜訪、⼯程簡報說明",
      "合約案件簽訂及結案",
      "客戶情報蒐集",
    ],
    reserve: [
      "負責進口空調設備銷售及市場開發",
      "開發客戶、客戶拜訪、⼯程簡報說明",
      "合約案件簽訂及結案",
      "客戶情報蒐集",
    ],
  },
];

export default function Recruitment() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>加入我們</h1>
          <p className={styles.intro}>
            公司秉持著『綠色,夥伴』的經營理念，公司的願景是致力於供應鏈與業務管理，以投入效益的觀點善用地球資源，提供和諧永續環境的創新服務。
            架構“分散的自治組織”，提供公司成員成就理想大志的平台。
            <br />
            <br />
            鴻鵠之志(Great)
            參與(Partner)理想(idea)我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入松鴻興業有限公司的工作行列。
          </p>
          <div className={styles.wrap}>
            <h2>⼯務專案⼯程師 </h2>
            <p>工作內容: </p>
            <ul>
              {content[0].project.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>
            <p className={styles.readMore}>
              <a href="https://www.104.com.tw/company/b98kf6g" target="_blank">
                了解更多
                <IoIosArrowRoundForward />
              </a>
            </p>
          </div>
          <div className={styles.wrap}>
            <h2>國內業務⼯程師</h2>
            <p>工作內容: </p>
            <ul>
              {content[0].domestic.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>
            <p className={styles.readMore}>
              <a href="https://www.104.com.tw/company/b98kf6g" target="_blank">
                了解更多
                <IoIosArrowRoundForward />
              </a>
            </p>{" "}
          </div>
          <div className={styles.wrap}>
            <h2>業務⼈員儲備幹部</h2>
            <p>工作內容: </p>
            <ul>
              {content[0].reserve.map((item, index) => (
                <li key={index}>{index + 1}. {item}</li>
              ))}
            </ul>
            <p className={styles.readMore}>
              <a href="https://www.104.com.tw/company/b98kf6g" target="_blank">
                了解更多
                <IoIosArrowRoundForward />
              </a>
            </p>{" "}
          </div>
        </section>
      </div>
    </Layout>
  );
}
