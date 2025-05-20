import { PrismaClient } from "@prisma/client";
import fs from 'fs';

const prisma = new PrismaClient();

const main = async () => {
    
    // const data = await prisma.settlementTransaction.findMany({
    //     where: {
    //         incomingTxn: {
    //             isNot:null
    //         }
    //     },
    //     select: {
    //         amountReceived: true,
    //         id:true
    //     }
    // })


    const addresses = await prisma.userBTCAddress.findMany(
        {
            select: {
                address: true,
                whitelabelId: true,
            }
        }
    )


    //save addresses to a file
    const filePath = 'addresses.json';
    fs.writeFileSync(filePath, JSON.stringify(addresses), 'utf8',)
    // console.log(data)
    // console.log(addresses)
    // const data = await prisma.settlementTransaction.findMany({




   
}

main()