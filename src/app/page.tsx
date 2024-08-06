'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/page';
// import RoundedDivs from './components/css/rounded';

const Home: NextPage = () => {
  return (
    <main>
      <div>
      <Head>
        <title>Linkly - Shorten Your Links</title>
        <meta name="description" content="Linkly - Efficient and easy-to-use URL shortening service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      {/* <RoundedDivs/> */}
      <Footer />
      </div>
    </main>
  );
};

export default Home;
