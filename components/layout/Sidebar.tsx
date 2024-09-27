import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

import { FooterLinkData } from "@/lib/data/footerData";
import styles from '@/styles/components/layout/sidebar.module.scss';
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className={styles.wrap}>
      <ul className={styles.linkItems}>
        {FooterLinkData.map((item, index) => (
          <li key={index} onClick={() => router.push(item.link)}>
            <p>{item.name}</p>
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
