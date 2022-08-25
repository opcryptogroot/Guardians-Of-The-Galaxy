import type { NextPage } from "next";

import Head from "next/head";
import BountyPage from "../components/Bounty";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popup from "../components/Popup";

const Bounty: NextPage = () => {
  return (
    <div>
      <Head>
        <title>G.O.T.G - Putin Out!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popup />
      <Header />
      <BountyPage />
      <Footer />
    </div>
  );
};

export default Bounty;
