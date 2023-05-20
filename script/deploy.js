const { ethers } = require('hardhat');

async function main() {
  const deployer = await ethers.getSigner;
  console.log("Deployer", deployer);

  const Crowdfunding = await ethers.getContractFactory('Crowdfunding');
  const crowdfunding = await Crowdfunding.deploy();

  console.log("Crowdfunding contract Address", counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error)=>{
    console.error(error);
    process.exit(1);
  });