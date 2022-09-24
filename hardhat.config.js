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
    ptau: "pot15_final.ptau",
    // ptau: "https://hermezptau.blob.core.windows.net/ptau/powersOfTau28_hez_final_15.ptau",
    circuits: [
      {
        name: "init"
      },
    ],
  },
  networks: {
    hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [`0x` + process.env.PRIVATE_KEY]
    }
  }
};
