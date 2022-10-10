# ZK Example using Circom and Solidity with Hardhat

A basic circom project using [Hardhat](https://github.com/nomiclabs/hardhat), [hardhat-circom](https://github.com/projectsophon/hardhat-circom), and [snark-js](https://github.com/iden3/snarkjs).

## Install

`yarn` to install dependencies

## Build

`yarn circom:dev` to build deterministic development circuits.

Further, for debugging purposes, you may wish to inspect the intermediate files. This is possible with the `--debug` flag which the `circom:dev` task enables by default. You'll find them (by default) in `artifacts/circom/`

To ensure that the proof is generated correctly, you can verify it with `yarn dev:verify-proof`.

Tests can be run using `yarn test`. As convention in Hardhat, the tests will be located in the `test` folder.

## Deployment

To deploy to Goerli network using Infura, first create `.env` file following the example in `.env.example` and fill in the two fields.

Then, run `npx hardhat run scripts/deploy.js --network goerli` to deploy the `ZK.sol` contract. This will compile the contract and deploy it to the Goerli network.

## Generate Solidity Calldata

To interact with the deployed contract, we need to generate the appropriate calldata to pass into Solidity. To do this, we will perform the steps below.

1. `yarn circom:dev`
2. `yarn witness-calc`
3. `yarn create-proof`
4. `yarn verify-proof`
5. `yarn generate-call`

The output of the last command will be the calldata needed for Solidity. Note that the value of b is a 2 x 2 array and will need to be split up into two inputs of 1 x 2 arrays to pass into the Solidity function. Also, note that all values generated are in hex and may need to be converted into decimal before inputing as function arguments.
