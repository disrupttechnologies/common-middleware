import { Spot as BinanceClient, Spot } from '@binance/connector-typescript';

interface ExchangeTokenInfoType {
  [symbol: string]: {
    minQty: number;
    maxQty: number;
    stepSize: number;
  };
}
const main = async () => {
  const binance = new BinanceClient(
    process.env.BINANCE_API_KEY,
    process.env.BINANCE_API_SECRET,
    {},
  );

  await initExchangeInfo(binance, [
    'BNB',
    'USDC',
    'LTC',
    'SOL',
    'DOT',
    'MATIC',
    'LINK',
    'ADA',
    'CAKE',
    'TWT',
    '1INCH',
    'DAI',
    'PEPE',
    'ETH',
    'BTC',
    'SHIB',
    'FTM',
    'NEAR',
    'MKR',
    'UNI',
  ]);
  // const resp = await binance.exchangeInformation()
  // const exchangeInfo = resp;

  // // Find the BTCUSDT pair
  // const symbolInfo = exchangeInfo.symbols.find(symbol => symbol.symbol === 'BTCUSDT');

  // // Extract the LOT_SIZE filter
  // const lotSizeFilter = symbolInfo.filters.find(filter => filter.filterType === 'LOT_SIZE');
  // //@ts-ignore
  // const minQty = parseFloat(lotSizeFilter.minQty);
  // //@ts-ignore
  // const maxQty = parseFloat(lotSizeFilter.maxQty);
  // //@ts-ignore
  // const stepSize = parseFloat(lotSizeFilter.stepSize);

  //@ts-ignore
  // console.log("resp", minQty, maxQty, stepSize)

  //  // Your order quantity
  //  const quantity = 0.00506157;

  //  // Ensure the quantity is within the allowed range
//    if (quantity < minQty || quantity > maxQty) {
//      throw new Error(`Quantity must be between ${minQty} and ${maxQty}`);
//    }
  //  const adjustedQuantity = Math.floor(quantity / stepSize) * stepSize;
  //  if (adjustedQuantity === 0) {
  //     throw new Error(`Adjusted quantity is zero after applying step size of ${stepSize}`);
  //  }
  // console.log(adjustedQuantity)
};

async function initExchangeInfo(binanceClient: Spot, tokens: string[]) {
  const _exchangeTokenInfo: ExchangeTokenInfoType = {};
  const info = await binanceClient.exchangeInformation();
  const infoSymbols = info.symbols;
  for (const token of tokens) {
    const pair = `${token}USDT`;
    const symbol = infoSymbols.find((symbol) => symbol.symbol === pair);
    const lotSizeFilter = symbol.filters.find(
      (filter) => filter.filterType === 'LOT_SIZE',
    );
    const minQty = parseFloat(lotSizeFilter['minQty']);
    const maxQty = parseFloat(lotSizeFilter['maxQty']);
    const stepSize = parseFloat(lotSizeFilter['stepSize']);

    _exchangeTokenInfo[pair] = {
      stepSize,
      maxQty,
      minQty,
    };
  }
  console.log("_exchangeTokenInfo",_exchangeTokenInfo["BTCUSDT"]);
}

main();
