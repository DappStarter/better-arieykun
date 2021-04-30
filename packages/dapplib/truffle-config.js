require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give close brown slab carpet radar situate coach just forum fortune general'; 
let testAccounts = [
"0x8740a4f4b56464b1f7fec6149ada871382152df934eea2cc9c2e7e203b8d4433",
"0x542e033992d2dc5afc9925d633f2b8b93f14adfd4c78fc984022273f8fd54a25",
"0x08084d3cf70c300d0ec12fe6c4f2d790af2507978205c5ed1d26e8561cd30bd1",
"0x97f13d5624c91698a4e8db4b6187162f7529f3643cef4274c7a989df791900d2",
"0x3f742bbe5aa927c18a271b97b8b692ecbc8ee9506843d5db2b836b50eca2e178",
"0x80ab2790aec91adc43049a5d45e5ada3ecc8f6454e5b5b32c4028008418264a4",
"0x646a8a1e1907a9964ca2b99259529b922ca366a54074a797f1d11f8afde1c664",
"0x03e28cd9d88da7b357db4b68ae2ccd9e358d4335623f745bbcc8d3e433f5c15e",
"0x4e7dabc95e4385a9ba48cad2bf53b5b2d7b5ca3dd38dfdf63980ee609fc1db5f",
"0xb283d06998220e82db57e8e6c82ffe59637c8020c0d362c881dc4345b0ad83c3"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


