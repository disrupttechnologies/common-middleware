import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async () => {
    
    const ids = []

    await prisma.binanceIncomingTxn.delete({
        where: {
        id:"wxvcrsequfj3kyvzj3owavkq"
    }})
}

main()