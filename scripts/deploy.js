const hre = require("hardhat");

async function main() {
  const UnchainedToken = await hre.ethers.getContractFactory("UnchainedToken");
  const unchainedToken = await UnchainedToken.deploy(1000000);

  await unchainedToken.deployed();

  console.log("Lock with 1 ETH deployed to:", unchainedToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
