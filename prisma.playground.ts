import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    
    const incomingTxn = await prisma.binanceIncomingTxn.findFirst({
        where: {
            txnHash: {
                equals: "43FmEhVccggpxLothkCJ8Mb2L7JM6dJq4sk1Tr9Gpu59txDYVfW5ypB984u5RkD5sxyLWpkAdqmPkWwSDhuTqNiq",
                mode:"insensitive"
            }
        }
    })
    

    // console.log("Asasaas",data)

   
}

main()