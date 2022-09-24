const hre = require("hardhat");
const { assert } = require("chai");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("init circuit", () => {
    let circuit;
    const sampleInput = {
        x: "1764",
    }
    const sanityCheck = true;

    before(async () => {
        circuit = await hre.circuitTest.setup("init");
    });

    it("produces a witness with valid constraints", async () => {
        const witness = await circuit.calculateWitness(sampleInput, sanityCheck);
        await circuit.checkConstraints(witness);
    });

    it("has expected witness values", async () => {
        const witness = await circuit.calculateLabeledWitness(
          sampleInput,
          sanityCheck
        );
        assert.propertyVal(witness, "main.x", sampleInput.x);

        assert.propertyVal(
          witness,
          "main.out",
          "5489029987"
        );
    });
});