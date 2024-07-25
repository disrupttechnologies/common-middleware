import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';
import { IncomingTxnStatus } from '@prisma/client';
import { WhitelabelConfig } from 'src/common/configs/config.interface';
// import { IncomingTxnStatus } from 'src/@generated/prisma/incoming-txn-status.enum';
import crypto from 'crypto';
import iFormData from 'form-data';
import { HttpService } from '@nestjs/axios';

export class OrderFinalizedEvent {
  constructor(public data: OrderDataType[]) {}
}

export interface OrderDataType {
  txnHash: string;
  whitelabelId: string;
  senderAddress: string;
  network: string;
  amountReceived: string;
  paidCurrency: string;
  status: IncomingTxnStatus;
  failedRemarks?: string;
  usdtAmount?: string;
}

@Injectable()
export class EventManagerService {
  private whitelabelConfig: WhitelabelConfig;

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {
    this.whitelabelConfig = config.get<WhitelabelConfig>('whitelabelConfig');
  }

  @OnEvent('order.finalized')
  async handleOrderFinalizationEvent(payload: OrderFinalizedEvent) {
    const categoriedEvents = payload.data.reduce((acc, item) => {
      const key = item.whitelabelId;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});

    for (const whitelabelId of Object.keys(categoriedEvents)) {
      await this.handleOrderFinalization(
        whitelabelId,
        categoriedEvents[whitelabelId],
      );
    }
  }

  createSignature(data: any) {
    const signature = crypto.createHmac(
      'sha256',
      process.env.WHITE_LABEL_WEBHOOK_SECRET,
    );
    if (data instanceof iFormData) {
      signature.update(data.getBuffer());
    } else if (data) {
      signature.update(data);
    }
    return {
      'X-App-Access-Sig': signature.digest('hex'),
    };
  }

  async handleOrderFinalization(whitelabelId: string, data: OrderDataType[]) {
    console.log("handleOrderFinalization",whitelabelId,data)
    if (this.whitelabelConfig[whitelabelId]) {
      try {
        const url = `${this.whitelabelConfig[whitelabelId].backendUri}/middlewarehooks/paymentReceived`;
        const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...this.createSignature(JSON.stringify(data)),
        };
       const resp = await this.http.axiosRef.post(url, data, {
          headers,
       });
        console.log("qaqawswe",resp)
      } catch (err) {
        console.error("handleOrderFinalization",err)
      }
    }
  }
}
