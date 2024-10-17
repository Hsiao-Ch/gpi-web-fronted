import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Service from "@/components/home/Service";
import Contact from "@/components/home/Contact";
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
