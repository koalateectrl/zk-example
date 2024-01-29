require("hardhat-circom");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.11",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "https://storage.googleapis.com/zkevm/ptau/powersOfTau28_hez_final_15.ptau",
    circuits: [
      {
        name: "init"
      },
    ],
  },
  // networks: {
  //   hardhat: {},
  //   sepolia: {
  //     url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
  //     accounts: [`${process.env.SEPOLIA_PRIVATE_KEY}`]
  //   },
  // },
  // etherscan: {
  //   apiKey: `${process.env.ETHERSCAN_API_KEY}`
  // }
};
