// Update this to be the console log output of "yarn generate-call".
// const arr = [["0x0133093f88ff38b38aea1f45e150a723a51ceef494fca8a94010994b627db110", "0x223a25be8b2b3ecefe8781117d06cf40d5705ab5689c03e719c00dcc3a2edc1e"],[["0x037c9d5f7f09e1ce7d81550dc98338890cc4339d702a167729dada0a40fef3d7", "0x0e50979cd24151dd9c435713a912133b57c83f5da4d52e07253096b8a2f3cef8"],["0x116748e3d8c96712586162e040edee55d64d7a52cbe4386a028c89dd1fb926b3", "0x12dac62e0646d131c6735575f0bc572e37b566cb55d0090c20a08a6d9df0b19e"]],["0x02de09f4cd8eceeea57f59f7c19a95e912a192417a2c2aff71f8340dfe2dd921", "0x25089b51793b7b7cd764968863761282383d34b85fed741500375d906ddcbcb3"],["0x2323966c7385a437ec039864aa44a153587a402717f8bfe53741eb490f9935c8"]];

function hexStrToStr(hexStr) {
    return BigInt(hexStr).toString();
}

const a = [hexStrToStr(arr[0][0]), hexStrToStr(arr[0][1])];
const b_0 = [hexStrToStr(arr[1][0][0]), hexStrToStr(arr[1][0][1])];
const b_1 = [hexStrToStr(arr[1][1][0]), hexStrToStr(arr[1][1][1])];
const c = [hexStrToStr(arr[2][0]), hexStrToStr(arr[2][1])];

let publicInputs = [];
for (i = 0; i < arr[3].length; i++) {
    publicInputs.push(hexStrToStr(arr[3][i]));
}

const verifyProofInputs = {
    a: a,
    b_0: b_0,
    b_1: b_1,
    c: c,
    publicInputs: publicInputs
}

console.log(verifyProofInputs);