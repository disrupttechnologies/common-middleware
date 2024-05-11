import { PrismaClient } from "@prisma/client"

const cleint = new PrismaClient()

const main = async () => {
    const records = await cleint.userBTCAddress.findMany()

}


main()