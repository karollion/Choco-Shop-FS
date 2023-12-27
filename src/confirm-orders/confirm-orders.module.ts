import { Module } from '@nestjs/common';
import { ConfirmOrdersController } from './confirm-orders.controller';
import { ConfirmOrdersService } from './confirm-orders.service';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  controllers: [ConfirmOrdersController],
  providers: [ConfirmOrdersService, PrismaService],
})
export class ConfirmOrdersModule {}
