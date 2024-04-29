export const tokensConfig = {
  '1': [
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    '0x514910771af9ca656af840dff83e8264ecf986ca',
    '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    '0x6b175474e89094c44da98b954eedeac495271d0f',
    '0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4',
    '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
  ],
  '56': [
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF',
    '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    '0x4b0f1812e5df2a09796481ff14017e6005508003',
    '0x111111111117dc0aa78b770fa6a738034120c302',
    '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    '0x25d887ce7a35172c62febfd67a1856f20faebb00',
    '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  ],
};





export const stableToken = {
  "1": "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "56":"0x55d398326f99059ff775485246999027b3197955"
}



export interface TokenBalanceResponse {
    [chainId : string]: {
         [address:string]:string
     }
 }