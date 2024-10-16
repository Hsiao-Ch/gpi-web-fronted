import Image from "next/image";
import { useState } from "react";
import { FaLink, FaSearch } from "react-icons/fa";

import Layout from "@/components/layout/Layout";
import Modal from "@/components/common/Modal"; // 导入新建的 Modal 组件
import styles from "@/styles/pages/products.module.scss";
import { productsData } from "@/lib/data/productsData";
import { ProductsType } from "@/lib/types/productsType";

export default function Products() {
  const lokesLength = productsData[0].lokes.length;
  const spirptechLength = productsData[0].spirptech.length;
  const sum = lokesLength + spirptechLength;

  const [productList, setProductList] = useState<ProductsType[]>(productsData);
  const [page, setPage] = useState("ALL");
  const [total, setTotal] = useState<number>(sum);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalAltText, setModalAltText] = useState("");

  const handleClick = (type: string) => {
    setPage(type);
    if (type === "LAKOS") {
      setProductList([{ lokes: productsData[0].lokes, spirptech: [] }]);
      setTotal(lokesLength);
    } else if (type === "SPIRPTECH") {
      setProductList([{ lokes: [], spirptech: productsData[0].spirptech }]);
      setTotal(spirptechLength);
    } else {
      setProductList(productsData);
      setTotal(lokesLength + spirptechLength);
    }
  };

  const openModal = (imageSrc: any, altText: string) => {
    setModalImageSrc(imageSrc);
    setModalAltText(altText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
    setModalAltText("");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <p>分類</p>
          <button
            onClick={() => handleClick("ALL")}
            className={page == "ALL" ? styles.active : ""}
          >
            全部<span>({lokesLength + spirptechLength})</span>
          </button>
          <button
            onClick={() => handleClick("LAKOS")}
            className={page == "LAKOS" ? styles.active : ""}
          >
            Lakos<span>({lokesLength})</span>
          </button>
          <button
            onClick={() => handleClick("SPIRPTECH")}
            className={page == "SPIRPTECH" ? styles.active : ""}
          >
            Spirptech<span>({spirptechLength})</span>
          </button>
        </div>
        <section>
          <p>共 {total} 筆</p>
          {productList.map((item, index) => (
            <div key={index} className={styles.itemWrap}>
              {item.lokes.map((lokesItem, lokesIndex) => (
                <div key={lokesIndex} className={styles.item}>
                  <div className={styles.itemImage}>
                    <Image src={lokesItem.image} alt={lokesItem.alt} />
                  </div>
                  <p className={styles.name}>{lokesItem.alt}</p>
                  <a href={lokesItem.link} className={styles.readMore} target="_blank">
                    閱讀更多
                  </a>
                  <div className={styles.mask}>
                    <p
                      className={styles.link}
                      onClick={() => window.open(lokesItem.link, "_blank")}
                    >
                      <FaLink />
                    </p>
                    <p
                      className={styles.link}
                      onClick={() => openModal(lokesItem.image, lokesItem.alt)}
                    >
                      <FaSearch />
                    </p>
                  </div>
                </div>
              ))}
              {item.spirptech.map((spirptechItem, spirptechIndex) => (
                <div key={spirptechIndex}>
                  <div className={styles.itemImage}>
                    <Image src={spirptechItem.image} alt={spirptechItem.alt} />
                  </div>
                  <p className={styles.name}>{spirptechItem.alt}</p>
                  <a href={spirptechItem.link} className={styles.readMore} target="_blank">
                    閱讀更多
                  </a>
                </div>
              ))}
            </div>
          ))}
        </section>

        <Modal
          imageSrc={modalImageSrc}
          altText={modalAltText}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </Layout>
  );
}
