import React, { useState, useContext } from "react";
import Image from "next/image";

import Style from "./Navbar.module.css";
import { ERC20ICOContext } from "../../context/unchainedToken";

import banner from "../../assets/banner.png";

const Navbar = () => {
  const { account, accountBalance, userId } = useContext(ERC20ICOContext);
  return (
    <>
      <nav className={Style.navbar}>
        {" "}
        {/* Use the imported CSS class */}
        <div className={Style.container}>
          {" "}
          {/* Use the imported CSS class */}
          <div className={Style.navbarBrand}>
            {" "}
            {/* Use the imported CSS class */}
            <a href="/" className={Style.navbarItem}>
              CryptoApp
            </a>{" "}
            {/* Use the imported CSS class */}
          </div>
          <div className={Style.navbarMenu}>
            {" "}
            {/* Use the imported CSS class */}
            <div className={Style.navbarEnd}>
              {" "}
              {/* Use the imported CSS class */}
              <a href="/" className={Style.navbarItem}>
                Home
              </a>{" "}
              {/* Use the imported CSS class */}
              <a href="/prices" className={Style.navbarItem}>
                Prices
              </a>{" "}
              {/* Use the imported CSS class */}
              <a href="/news" className={Style.navbarItem}>
                News
              </a>{" "}
              {/* Use the imported CSS class */}
              <a href="/portfolio" className={Style.navbarItem}>
                Portfolio
              </a>{" "}
              {/* Use the imported CSS class */}
              <a href="/about" className={Style.navbarItem}>
                About
              </a>{" "}
              {/* Use the imported CSS class */}
              {/* Add more links as needed */}
            </div>
          </div>
        </div>
      </nav>
      <div className={Style.navBar}>
        <div className={Style.navBar_box}>
          <div className={Style.navBar_box_left}>
            <h1>UCT Token</h1>
          </div>
          <div className={Style.navBar_box_right}>
            <p>
              Token Balance {""}
              {""}
              <span>{accountBalance}</span>
            </p>
            <p>
              <span>
                UserId #{userId} {""}
                {""} {account}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
