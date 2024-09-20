import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import product_1 from "@/public/banner/product-1.png";
import product_2 from "@/public/banner/product-2.png";
import product_3 from "@/public/banner/product-3.png";
import Image from "next/image";
import styles from "@/styles/components/home/banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.section}>
      <Carousel
        showThumbs={false} // Remove the thumbnail previews
        infiniteLoop // Enables infinite looping
        autoPlay // Enables automatic sliding
        interval={3000} // Interval between slides
        stopOnHover // Stops autoPlay when the user hovers
        showArrows // Show next and previous arrows
        showStatus={false} // Remove slide status
      >
        <div className={styles.wrap}>
          <div className={styles.imageWrap}>
            <Image src={product_1} alt={""} />
            <p className={styles.productName}>
              TBX-TBI
              <br />
              SideStreamClean
            </p>
            <div>
              <button>了解更多</button>
              <button className={styles.contactButton}>聯絡我們</button>
            </div>
          </div>
          <div className={styles.mask}></div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.imageWrap}>
            <Image src={product_2} alt={""} />
            <p className={styles.productName}>
              TCX-TCI TowerClean
            </p>
            <div>
              <button>了解更多</button>
              <button className={styles.contactButton}>聯絡我們</button>
            </div>
          </div>
          <div className={styles.mask}></div>
        </div><div className={styles.wrap}>
          <div className={styles.imageWrap}>
            <Image src={product_3} alt={""} />
            <p className={styles.productName}>
              ILB-ILS Separators
            </p>
            <div>
              <button>了解更多</button>
              <button className={styles.contactButton}>聯絡我們</button>
            </div>
          </div>
          <div className={styles.mask}></div>
        </div>
      </Carousel>
    </div>
  );
}
