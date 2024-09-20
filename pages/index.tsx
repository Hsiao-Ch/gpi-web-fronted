import Head from 'next/head';
import Navbar from '@/components/layout/Navber';
import Banner from '@/components/home/Banner';
import About from '@/components/home/About';
import Service from '@/components/home/Service';

export default function Home() {
  return (
    <>
      <Head>
        <title>網站標題</title>
        <meta name="description" content="網站描述" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <About />
        <Service />
      </main>
    </>
  );
}