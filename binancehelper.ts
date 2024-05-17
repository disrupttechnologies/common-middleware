import { Spot as BinanceClient } from '@binance/connector-typescript';



const main = async () => {
    const binance = new BinanceClient(process.env.BINANCE_API_KEY, process.env.BINANCE_API_SECRET, {
    })

    const resp = await binance.depositAddress('BNB')
   

    // const rsp = await binance.exchangeInformation()
    console.log("ASasas",resp)
}


main()