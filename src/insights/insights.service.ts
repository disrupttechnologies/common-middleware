import { Injectable } from '@nestjs/common';
import { CreateInsightInput } from './dto/create-insight.input';
import { UpdateInsightInput } from './dto/update-insight.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class InsightsService {
  constructor(private readonly prisma: PrismaService) {}
  async getTVL() {
    try {
      const result = await this.prisma.$queryRaw`SELECT 
    TO_CHAR(DATE_TRUNC('month', st."createdAt"), 'Mon YYYY') AS month_year,
    SUM(CAST(st."amountReceived" AS NUMERIC)) AS total_amount_received
  FROM 
      "SettlementTransaction" st
  JOIN 
      "BinanceIncomingTxn" bit
  ON 
    bit."settlementTransactionId" = st.id
  WHERE
      st."status" = 'SUCCESS' AND
      st."createdAt" IS NOT NULL AND
      st."amountReceived" IS NOT NULL AND
      bit."settlementTransactionId" IS NOT NULL
      GROUP BY 
    DATE_TRUNC('month', st."createdAt")
ORDER BY
    DATE_TRUNC('month', st."createdAt");
  `;

      console.log('ssasasas', result);
      return result;
    } catch (err) {
      console.log('ssasasasasassaqq', err);
    } finally {
        console.log("qaqere")
    }
  }
}
