import { IoIosArrowDropright } from "react-icons/io";
import { useRouter } from "next/router";

import { InfoLinkData } from "@/lib/data/infoData";
import styles from "@/styles/components/layout/sidebarInfo.module.scss";

export default function SidebarInfo() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <ul className={styles.linkItems}>
        {InfoLinkData.map((item, index) => (
          <li key={index} onClick={() => router.push(item.link)}>
            <p>{item.name}</p>
            <IoIosArrowDropright />
          </li>
        ))}
      </ul>
      <div className={styles.helpWrap}>
        <h2>聯絡我們</h2>
        <p>
          <span>地址:</span>新北市新莊區新北大道4段217號3樓
        </p>
        <p>
          <span>電話:</span>02-85213289(劉小姐)
        </p>
        <p>
          <span>傳真:</span>02-81926810
        </p>
      </div>
    </div>
  );
}
