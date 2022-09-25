# ZK Example using Circom and Solidity with Hardhat

A basic circom project using [Hardhat](https://github.com/nomiclabs/hardhat) and [hardhat-circom](https://github.com/projectsophon/hardhat-circom).

## Install

`yarn` to install dependencies

## Build

`yarn circom:dev` to build deterministic development circuits.

Further, for debugging purposes, you may wish to inspect the intermediate files. This is possible with the `--debug` flag which the `circom:dev` task enables by default. You'll find them (by default) in `artifacts/circom/`

## Deployment

To deploy to Goerli network using Infura, first create `.env` file following the example in `.env.example` and fill in the two fields.

Then, run `npx hardhat run scripts/deploy.js --network goerli` to deploy the `ZK.sol` contract. This will compile the contract and deploy it to the Goerli network.
