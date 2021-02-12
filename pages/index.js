import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>reCoffee</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div>ShopBlog</div>
    </div>
  );
}