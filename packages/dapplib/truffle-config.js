require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rate night puppy hunt lobster fringe gate'; 
let testAccounts = [
"0x496cc389b0bf59a669d610ad68d244d1f266768a655810f564941bce95ee3152",
"0x389f1a4541b39c206367ace8d32cacf98a6549a2c10eb94a63f072cab7e3a91d",
"0xb32ea3fb3fbb436eb9a4789594913631756d27b32449268531a709db4f991873",
"0x35e7e989b31b246acbf6aa2a961edb92a48353bad47ed84be0d9d0aa4d325f12",
"0xb240910ba0efe4d77647d4bcb50f7be90c9cabff7c753a98654ca933f88c337c",
"0xa1b528102c6741778d60082666b5db8b89a2d212b8b01662ba570190ac9975ed",
"0xa0121284f7832e2b2c2890b9ff7f5d2096e12c72a090fb31461ecdee686d3e83",
"0x98d73524ee3d1e0e1a8576a9ea65fe05950901f6a421c9e1a2b4e94a8d330dcb",
"0x83b179be031b8ad988469ad85bb4889d5a6cf95a5217f6285428d33f3101be25",
"0x1dc614d98b9d2fb9de03dbb2e100a913f5740ec05b955ef0361fea7b8aa87b48"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
