import Navbar from "./Navber";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>松鴻興業股份有限公司</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="NTUB IMD BIRC CMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/GPi logo.jpg" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
