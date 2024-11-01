import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    
    const data = await prisma.userBTCAddress.findFirst({
        where: {
            address: {
                equals: "bc1q4kvxhvr808kp6u2tavzdyu2hhy7fl3ga2hctn6",
                mode:"insensitive"
          }
       }
    })
    console.log(data)

   

   
}

main()