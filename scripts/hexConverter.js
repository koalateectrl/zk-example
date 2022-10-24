#!/usr/bin/env node

function hexStrToStr(hexStr) {
    return BigInt(hexStr).toString();
}

let stdin = process.openStdin();

let data = "";

stdin.on('data', function(chunk) {
    data += chunk;
});

const regex = /[^A-Za-z0-9]/g;

stdin.on('end', function() {
    const split_input = data.split(",");
    const a = [hexStrToStr(split_input[0].replace(regex, "")), hexStrToStr(split_input[1].replace(regex, ""))];
    const b_0 = [hexStrToStr(split_input[2].replace(regex, "")), hexStrToStr(split_input[3].replace(regex, ""))];
    const b_1 = [hexStrToStr(split_input[4].replace(regex, "")), hexStrToStr(split_input[5].replace(regex, ""))];
    const c = [hexStrToStr(split_input[6].replace(regex, "")), hexStrToStr(split_input[7].replace(regex, ""))];
    
    let publicInputs = [];
    for (let i = 8; i < split_input.length; i++) {
        publicInputs.push(hexStrToStr(split_input[i].replace(regex, "")));
    }   

    const verifyProofInputs = {
        a: a,
        b_0: b_0,
        b_1: b_1,
        c: c,
        publicInputs: publicInputs
    }

    console.log(verifyProofInputs);
});