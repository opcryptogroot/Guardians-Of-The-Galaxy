import type { NextPage } from "next";

import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popup from "../components/Popup";
import Content from "../components/Staking";

const Staking: NextPage = () => {
  return (
    <>
      <Head>
        <title>G.O.T.G - Staking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popup />
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Staking;
