import { useState } from "react";
import styles from "@/styles/components/layout/navbar.module.scss";
import Logo from "@/public/GPi logo.jpg";
import Image from "next/image";
import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
import { FooterLinkData } from "@/lib/data/footerData";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutIsShow, setAboutIsShow] = useState(false);
  const [serviceIsShow, setServiceIsShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAbout = () => {
    setAboutIsShow(!aboutIsShow);
  };

  const toggleService = () => {
    setServiceIsShow(!serviceIsShow);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image src={Logo} alt="gpi logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Desktop Links */}
      <ul className={styles.links}>
        <li className={styles.linkItem}>
          <Link href="/">首頁</Link>
        </li>

        {/* Dropdown for 公司簡介 */}
        <li className={`${styles.linkItem} ${styles.dropdown}`}>
          <p className={styles.item}>
            公司簡介 <IoMdArrowDropdown />
          </p>
          <div className={styles.dropdownMenu}>
            {FooterLinkData.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </li>

        {/* Dropdown for 產品介紹 */}
        <li className={styles.linkItem}>
          <Link href="/products">產品介紹</Link>
        </li>

        {/* Dropdown for 服務項目 */}
        <li className={`${styles.linkItem} ${styles.dropdown}`}>
          <p className={styles.item}>
            服務項目 <IoMdArrowDropdown />
          </p>
          <div className={styles.dropdownMenu}>
            <Link href="/maintenance">技術諮詢</Link>
            <Link href="/installation">性能測量</Link>
            <Link href="/installation">保養維修</Link>
          </div>
        </li>

        <li className={styles.linkItem}>
          <Link href="/contact">聯絡我們</Link>
        </li>

        {/* <li className={`${styles.linkItem} ${styles.dropdown}`}>
          <p className={styles.item}>
            聯絡資訊 <IoMdArrowDropdown />
          </p>
          <div className={styles.dropdownMenu}>
            <Link href="/contact">聯絡我們</Link>
            <Link href="/installation">線上回饋</Link>
          </div>
        </li> */}
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <li className={styles.linkItem}>
            <Link href="/">首頁</Link>
          </li>
          <li className={`${styles.linkItem} ${styles.dropdown}`}>
            <p className={styles.item} onClick={toggleAbout}>
              公司簡介
              <span>
                <IoIosArrowDown />
              </span>
            </p>
            {aboutIsShow && (
              <div className={styles.dropdownMenu}>
                {FooterLinkData.map((item, index) => (
                  <Link key={index} href={item.link}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li className={styles.linkItem}>
            <Link href="/products">產品介紹</Link>
          </li>
          <li className={`${styles.linkItem} ${styles.dropdown}`}>
            <p className={styles.item} onClick={toggleService}>
              服務項目
              <span>
                <IoIosArrowDown />
              </span>
            </p>
            {serviceIsShow && (
              <div className={styles.dropdownMenu}>
                <Link href="/maintenance">技術諮詢</Link>
                <Link href="/installation">性能測量</Link>
                <Link href="/installation">保養維修</Link>
              </div>
            )}
          </li>
          <li className={styles.linkItem}>
            <Link href="/contact">聯絡我們</Link>
          </li>
          {/* <li className={`${styles.linkItem} ${styles.dropdown}`}>
            <p className={styles.item} onClick={toggleContact}>
              聯絡資訊
              <span>
                <IoIosArrowDown />
              </span>
            </p>
            {contactIsShow && (
              <div className={styles.dropdownMenu}>
                <Link href="/contact">聯絡我們</Link>
                <Link href="/installation">線上回饋</Link>
              </div>
            )}
          </li> */}
        </div>
      )}
    </nav>
  );
}
