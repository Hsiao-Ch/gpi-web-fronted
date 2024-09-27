import Head from "next/head";
import Navbar from "@/components/layout/Navber";
import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Service from "@/components/home/Service";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Service />
      <Contact />
    </Layout>
  );
}
