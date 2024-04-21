import React, { useState } from "react";
import Image from "next/image";

import Style from "./Transfer.module.css";
import banner from "../../assets/banner.png";

const Transfer = ({
  NoOfToken,
  TokenName,
  TokenStandard,
  TokenSymbol,
  TokenOwnerBal,
  transferToken,
}) => {
  const [transferAccount, setTransferAccount] = useState("");
  const [tokenNumber, setTokenNumber] = useState(0);

  return (
    <div className={Style.transfer}>
      <div className={Style.transfer_box}>
        <div className={Style.transfer_box_left}>
          <h2>Token Analytics</h2>
          <div className={Style.transfer_box_left_box}>
            <p>
              Token Name <span>{TokenName}</span>
            </p>
            <p>
              Token Supply <span>{NoOfToken}</span>
            </p>
            <p>
              Token Symbol{" "}
              <span className={Style.unchainToken}>
                <Image
                  src={banner}
                  alt="banner"
                  width={70}
                  height={70}
                  objectFit="cover"
                  className={Style.unchainToken_img}
                ></Image>
              </span>
            </p>
            <p>
              Token Left <span>{TokenOwnerBal}</span>
            </p>
          </div>
        </div>

        <div className={Style.transfer_box_right}>
          <h2>Transfer Token</h2>
          <input
            placeholder="Address"
            type="text"
            onChange={(e) => {
              setTransferAccount(e.target.value);
            }}
          ></input>
          <input
            placeholder="Token Number"
            type="number"
            min={1}
            onChange={(e) => {
              setTokenNumber(e.target.value);
            }}
          ></input>
          <div className={Style.transfer_box_right_btn}>
            <button
              onClick={() => {
                transferToken(transferAccount, tokenNumber);
              }}
            >
              Send Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
