import { useState } from "react";
import styles from "@/styles/components/layout/navbar.module.scss";
import Logo from "@/public/GPi logo.jpg";
import Image from "next/image";
import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
import { FooterLinkData } from "@/lib/data/footerData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutIsShow, setAboutIsShow] = useState(false);
  const [serviceIsShow, setServiceIsShow] = useState(false);
  const [contactIsShow, setContactIsShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAbout = () => {
    setAboutIsShow(!aboutIsShow);
  };

  const toggleService = () => {
    setServiceIsShow(!serviceIsShow);
  };

  const toggleContact = () => {
    setContactIsShow(!contactIsShow);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/" className={styles.logoLink}>
          <Image src={Logo} alt="gpi logo" />
        </a>
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
          <a href="/">首頁</a>
        </li>

        {/* Dropdown for 公司簡介 */}
        <li className={`${styles.linkItem} ${styles.dropdown}`}>
          <p className={styles.item}>
            公司簡介 <IoMdArrowDropdown />
          </p>
          <div className={styles.dropdownMenu}>
            {FooterLinkData.map((item, index) => (
              <a key={index} href={item.link}>
                {item.name}
              </a>
            ))}
          </div>
        </li>

        {/* Dropdown for 產品介紹 */}
        <li className={styles.linkItem}>
          <a href="/products">產品介紹</a>
        </li>

        {/* Dropdown for 服務項目 */}
        <li className={`${styles.linkItem} ${styles.dropdown}`}>
          <p className={styles.item}>
            服務項目 <IoMdArrowDropdown />
          </p>
          <div className={styles.dropdownMenu}>
            <a href="/maintenance">技術諮詢</a>
            <a href="/installation">性能測量</a>
            <a href="/installation">保養維修</a>
          </div>
        </li>

        <li className={`${styles.linkItem} ${styles.dropdown}`}>
          <p className={styles.item}>
            聯絡我們 <IoMdArrowDropdown />
          </p>
          <div className={styles.dropdownMenu}>
            <a href="/maintenance">聯絡我們</a>
            <a href="/installation">線上回饋</a>
          </div>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <li className={styles.linkItem}>
            <a href="/">首頁</a>
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
                  <a key={index} href={item.link}>
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className={styles.linkItem}>
            <a href="/products">產品介紹</a>
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
                <a href="/maintenance">技術諮詢</a>
                <a href="/installation">性能測量</a>
                <a href="/installation">保養維修</a>
              </div>
            )}
          </li>
          <li className={`${styles.linkItem} ${styles.dropdown}`}>
            <p className={styles.item} onClick={toggleContact}>
              聯絡資訊
              <span>
                <IoIosArrowDown />
              </span>
            </p>
            {contactIsShow && (
              <div className={styles.dropdownMenu}>
                <a href="/maintenance">聯絡我們</a>
                <a href="/installation">線上回饋</a>
              </div>
            )}
          </li>
        </div>
      )}
    </nav>
  );
}
