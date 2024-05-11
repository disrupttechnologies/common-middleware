import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { SumSubService } from 'src/kyc/sumsub.service';
import type { Response } from 'express';

@Controller('docs')
export class DocsController {
  constructor(private readonly sumSub: SumSubService) {}

  @Get(':inspectionId/:docId')
  async getDocument(
    @Param('inspectionId') inspectionId: string,
    @Param('docId') docId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { contentType, image } = await this.sumSub.getDocument(
      inspectionId,
      docId,
    );
    res.set('Content-Type', contentType);
    return new StreamableFile(Buffer.from(image));
  }
}
