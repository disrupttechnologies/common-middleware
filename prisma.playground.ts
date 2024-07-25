import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    
    const data = await prisma.binanceIncomingTxn.findFirst({
        where: {
            txnHash: {
                contains: "htgmevgbangtvkh4y4roku9ibemlff6pnnnsrpzvnna2gmqqaattks6bewg56uykgx3x4bgxnsyxl2b4gssikjg",
                mode:"insensitive"
           }
       }
    })
    console.log(data)

   

   
}

main()