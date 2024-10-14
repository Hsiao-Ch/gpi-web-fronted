import Image from "next/image";

import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/alliances.module.scss";

import pic from "@/public/award/pic.jpg";
import lakos_logo from "@/public/alliances/lakos_logo.png";
import spirotherm_logo from "@/public/alliances/Spirotherm_Logo.png";
import spx_logo from "@/public/alliances/spx_logo.png";
import walraven_logo from "@/public/alliances/walraven_logo.svg";

export default function Alliances() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>策略聯盟</h1>
          <div className={styles.wrap}>
            <div className={styles.logoWrap} onClick={() => window.location.href='https://spxcooling.com/'}>
              <Image src={spx_logo} alt="spx_logo" />
            </div>
            <p>
              SPX Cooling Tech, LLC is a leading global manufacturer of cooling
              towers, evaporative fluid coolers, evaporative condensers and air
              cooled heat exchangers. For a century, we have provided
              exceptional quality equipment and service to the HVAC, process
              cooling, industrial, and refrigeration markets.
              <br />
              <br />
              With more than 150 offices, subsidiaries, and partners worldwide,
              we have the global reach and local services necessary to deliver
              solutions for our customers.
              <br />
              <br />
              Our corporate headquarters are in Overland Park, Kansas, United
              States.
            </p>
          </div>
          <div className={styles.wrap}>
            <div className={styles.logoWrap} onClick={() => window.location.href='https://spirotherm.com/'}>
              <Image src={spirotherm_logo} alt="spirotherm_logo" />
            </div>
            <p>
              Spirotherm, Inc. manufactures the industry leading high efficiency
              Spirovent® coalescing type air elimination products and its
              extended line of Spirotrap® dirt separators. A wholly owned
              subsidiary of Spiro Enterprises, Inc. , we have been developing
              and manufacturing products to improve water quality in the HVAC
              industry for almost 40 years. Sizes from 3/4” to 36” pipe, flows
              to over 30,000 GPM for residential, commercial, industrial, and
              institutional applications.
              <br />
              <br />
              Protecting the investment in high efficiency boilers, chillers,
              and other system components requires the fluid to be distributed
              efficiently. Eliminating air and dirt does away with many
              maintenance items that have been considered routine, saves energy,
              and improves overall system performance and heat transfer. We
              support a network of factory trained sales offices across North
              America, each with a staff of qualified sales and application
              professionals who can demonstrate how Distribution Efficiency will
              protect those investments.
            </p>
          </div>
          <div className={styles.wrap}>
            <div className={`${styles.logoWrap} ${styles.lakosLogo}`}
              onClick={() => window.location.href='https://www.lakos.com/'}>
              <Image src={lakos_logo} alt="lakos_logo" />
            </div>
            <p>
              Since 1972, LAKOS has solved customers’ complex water filtration
              problems using innovative and reliable solutions. Our products
              solve problems in industrial manufacturing, HVAC, food processing,
              agriculture, municipal and other applications worldwide.
              <br />
              <br />
              We play a key role in:
              <br />
              1. Improving water quality to specified TSS and micron rating
              <br />
              2. Reducing the frequency of filter changes and maintenance
              <br />
              3. Maintaining equipment and process design efficiency
              <br />
              <br />
              We exceed customer expectations with integrated filtration systems
              supported by outstanding customer service, product training, and
              technical expertise.
            </p>
          </div>
          <div className={styles.wrap}>
            <div className={`${styles.logoWrap} ${styles.walravenLogo}`}
              onClick={() => window.location.href='https://www.walraven.com/us/'}>
              <Image src={walraven_logo} alt="walraven_logo" />
            </div>
            <p>
              Walraven was established in 1942. Our founder, the
              great-grandfather of our current CEO, was an inventor with a love
              for simple and smart solutions. And now, more than 75 years later,
              we are a globally active company in the installation industry,
              still driven to develop simple, yet smart product systems. With
              our wide product range and expert advice, we can provide complete
              solutions for any project, no matter how large or complex.
              <br />
              <br />
              Our products are small compared to the some of the huge projects
              they are used in, but it’s the small parts that can make all the
              difference. If products are well thought-out, manufactured
              efficiently and supplied in a timely manner, they can save time,
              save money, add durability and make the lives of installers a lot
              easier!
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
