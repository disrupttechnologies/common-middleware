import { Spot as BinanceClient } from '@binance/connector-typescript';
require('dotenv').config()

const main = async () => {
  const binance = new BinanceClient(
    process.env.BINANCE_API_KEY,
    process.env.BINANCE_API_SECRET,
    {
     baseURL:"https://api.binance.com"
   }
  );



  const resp = await binance.getOrder("ETHUSDT", {
    origClientOrderId:"no7r43hkeegb4v188smjd2pm"
  })

  console.log('ss', resp);
};

main();
