import Image from "next/image";

import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/environment.module.scss";
import pic from "@/public/award/pic.jpg";

export default function Environment() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>環境、健康與安全政策</h1>
          <div className={styles.wrap}>
            <h2>永續發展策略</h2>
            <div className={styles.items}>
              <div>
                <p className={styles.subTitle}>願景</p>
                <ul>
                  <li>資源永續(Green)</li>
                  <li>效益 (Performance)</li>
                  <li>創新 (innovation)</li>
                </ul>
                <p className={styles.subTitle}>核心價值</p>
                <ul>
                  <li>誠正有信</li>
                  <li>擔當責任</li>
                </ul>
              </div>
              <div className={styles.item}>
                <p className={styles.subTitle}>發展策略</p>
                <ul>
                  <li>
                    <p>
                      <span>治理面</span>分散的自治組織
                    </p>
                    <ul>
                      <li>鴻鵠之志(Great)</li>
                      <li>參與(Partner)</li>
                      <li>理想 (idea)</li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      <span>供應商面</span>供應鏈與業務管理
                    </p>
                    <ul>
                      <li>與合作夥伴共創價值</li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      <span>環境面</span>善用地球資源
                    </p>
                    <ul>
                      <li>投入效益使資源永續</li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      <span>社會面</span>永續環境創新服務
                    </p>
                    <ul>
                      <li>提供創新的解決方案、持續改善</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.wrap}>
            <h2>品質政策</h2>
            <ul className={styles.climateWrap}>
              <li>預防災害，遵守法規。</li>
              <li>創意生活，喜悅生命。</li>
              <li>持續改善，資源永續。</li>
            </ul>
          </div>
          <div className={styles.wrap}>
            <h2>氣候行動變遷政策</h2>
            <ul className={styles.climateWrap}>
              <li>
                一、為降低氣候變遷造成可能之衝擊，公司須確實遵循環保法令政策，
                推動組織促進各項環保制度的訂定，供相關部門遵守執行，以確保組織運作及同仁工作安全與健康。
              </li>
              <li>
                二、各部門因應氣候變遷，提升公司正面形象，須滿足利害相關者之需求。
              </li>
            </ul>
          </div>
          <div className={styles.wrap}>
            <h2>職業安全衛生政策</h2>
            <ul>
              <li>
                一、預防災害：落實風險評估，杜絕可預見的危險與損失控制，以保障員工安全與健康，並建構良好安全工作環境。
              </li>
              <li>
                二、遵守法規：遵守政府環安衛相關法令及其他要求事項，以及顧客相關要求。
              </li>
              <li>
                三、創意生活：豐富的生活體驗是讓創意得以不斷湧現的泉源，突破挑戰習慣領域創新思考，建立更安全的工作環境。
              </li>
              <li>
                四、喜悅生命：使同仁具備身體的健康、心靈的健全、樸實有活力的生命喜悅，樂在工作。
              </li>
              <li>
                五、持續改善：透過環安衛管理方案與管理審查，持續提升環安衛管理績效。
              </li>
              <li>
                六、資源永續：透過環安衛管理，善盡企業社會責任，提供人、事、物的資源永續環境。
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
