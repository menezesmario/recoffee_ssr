import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Products } from '../components/Products';



export default function Home() {
  return (
    <div>
      <Head>
        <title>reCoffee</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Banner />    
      <Footer />
    </div>
  );
}