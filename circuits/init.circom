pragma circom 2.0.3;

include "../node_modules/circomlib/circuits/mimcsponge.circom";

template Main() {
    signal output hash;
    signal input preImage;

    // Using MiMC as it is SNARK-friendly hash function
    component mimc = MiMCSponge(1, 220, 1);
    mimc.ins[0] <== preImage;
    mimc.k <== 0;

    hash <== mimc.outs[0];
}

component main = Main();
// component main {public [preImage]} = Main();