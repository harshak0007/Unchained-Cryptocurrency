import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { unchainedTokenABI, unchainedTokenAddress } from "./constant";

const fetchContractERC20 = (signerOrProvider) =>
  new ethers.Contract(
    unchainedTokenAddress,
    unchainedTokenABI,
    signerOrProvider
  );

export const ERC20ICOContext = React.createContext();

export const ERC20Provider = ({ children }) => {
  const [holderArray, setHolderArray] = useState([]);
  const [account, setAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [userId, setUserId] = useState("");

  //   Token Info
  const [NoOfToken, setNoOfToken] = useState("");
  const [TokenName, setTokeName] = useState("");
  const [TokenStandard, setTokenStandard] = useState("");
  const [TokenSymbol, setTokenSymbol] = useState("");
  const [TokenOwner, setTokenOwner] = useState("");
  const [TokenOwnerBal, setTokenOwnerBal] = useState("");

  //   Connecting wallet to application

  const checkConnection = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      setAccount(accounts[0]);

      //   Creating Connection to contract and fetch data

      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);

      //   Get all token holder
      const allTokenHolder = await contract.balanceOf(accounts[0]);
      setAccountBalance(allTokenHolder.toNumber());

      const totalHolder = await contract._userId();
      setUserId(totalHolder.toNumber());
    } catch (error) {
      console.log("App is not Connected");
    }
  };

  //   ERC20 Contract

  const ERC20UnchainedToken = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      );
      const contract = fetchContractERC20(signer);

      //   Token Supply
      const supply = await contract.totalSupply();
      const totalSupply = supply.toNumber();
      setNoOfToken(totalSupply);

      //   Token Name
      const name = await contract.name();
      setTokeName(name);

      //   Token Symbol
      const symbol = await contract.symbol();
      setTokenSymbol(symbol);

      //   Token Standard
      const standard = await contract.standard();
      setTokenStandard(standard);

      //   Token owner Contract
      const onwerOfContract = await contract.onwerOfContract();
      setTokenOwner(onwerOfContract);

      //   Onwer Token Balance
      const balanceToken = await contract.balanceOf(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
      );
      setTokenOwnerBal(balanceToken.toNumber());
    } catch (error) {
      console.log("Error in ERC20 Token");
    }
  };

  const transferToken = async (address, value) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);

      const transfer = await contract.transfer(address, BigInt(value * 1));

      transfer.wait();

      window.location.reload();
    } catch (error) {
      console.log("Something wrong while transfer");
    }
  };

  const tokenHolderData = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);

      const allTokenHolder = await contract.getTokenHolder();

      allTokenHolder.map(async (el) => {
        const singleHolderData = await contract.getTokenHolderData(el);
        holderArray.push(singleHolderData);
        console.log(holderArray);
      });
    } catch (error) {
      console.log("something wrong in getting data");
    }
  };

  return (
    <ERC20ICOContext.Provider
      value={{
        checkConnection,
        ERC20UnchainedToken,
        transferToken,
        tokenHolderData,
        account,
        accountBalance,
        userId,
        holderArray,
        TokenName,
        TokenOwner,
        TokenOwnerBal,
        NoOfToken,
        TokenSymbol,
        TokenStandard,
      }}
    >
      {children}
    </ERC20ICOContext.Provider>
  );
};
