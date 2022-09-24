const hre = require('hardhat');

async function main() {

    const ZK = await hre.ethers.getContractFactory("ZK");
    const zk = await ZK.deploy();

    await zk.deployed();
  
    console.log("ZK address:", zk.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });