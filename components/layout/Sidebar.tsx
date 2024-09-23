import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

import { FooterLinkData } from "@/lib/data/footerData";
import styles from '@/styles/components/layout/sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.wrap}>
      <ul className={styles.linkItems}>
        {FooterLinkData.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
            <IoIosArrowDropright />
          </li>
        ))}
      </ul>
      <div className={styles.helpWrap}>
        <p className={styles.subTitle}>您需要協助嗎？</p>
        <p className={styles.content}>聯絡松鴻興業進行諮詢</p>
        <Link href={'/contact'}>聯絡我們</Link>
      </div>
    </div>
  );
}
