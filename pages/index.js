import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import { ERC20ICOContext } from "../context/unchainedToken";
import Style from "../styles/index.module.css";
import banner from "../assets/banner.png";
import Transfer from "../components/Transfer/Transfer";
import User from "../components/User/User";

const Home = () => {
  const {
    checkConnection,
    ERC20UnchainedToken,
    transferToken,
    holderArray,
    tokenHolderData,
    account,
    accountBalance,
    userId,
    TokenName,
    TokenOwner,
    TokenOwnerBal,
    NoOfToken,
    TokenSymbol,
    TokenStandard,
  } = useContext(ERC20ICOContext);

  useEffect(() => {
    checkConnection();
    tokenHolderData();
    ERC20UnchainedToken();
  }, []);
  return (
    <div className={Style.home}>
      <div className={Style.heroSection}>
        <div className={Style.heroSection_left}>
          <h1>Launching Unchained Token(UCT) ERC20 Token</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className={Style.heroSection_left_btn}>
            <button className={Style.btn}>White paper</button>
            <button className={Style.btn}>Product intro</button>
          </div>
        </div>

        <div className={Style.heroSection_right}>
          <Image
            src={banner}
            alt="banner"
            width={300}
            height={300}
            className={Style.heroSection_right_img_one}
          />
          <Image
            src={banner}
            alt="banner"
            width={200}
            height={200}
            className={Style.heroSection_right_img}
          />
          <Image
            src={banner}
            alt="banner"
            width={100}
            height={100}
            className={Style.heroSection_right_img}
          />
          <Image
            src={banner}
            alt="banner"
            width={50}
            height={50}
            className={Style.heroSection_right_img}
          />
          <Image
            src={banner}
            alt="banner"
            width={20}
            height={20}
            className={Style.heroSection_right_img}
          />
        </div>
      </div>

      <Transfer
        NoOfToken={NoOfToken}
        TokenName={TokenName}
        TokenStandard={TokenStandard}
        TokenSymbol={TokenSymbol}
        TokenOwnerBal={TokenOwnerBal}
        transferToken={transferToken}
      ></Transfer>
      <User holderArray={holderArray}></User>
    </div>
  );
};

export default Home;
