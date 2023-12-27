import { Controller } from '@nestjs/common';
import { ConfirmOrdersService } from './confirm-orders.service';

@Controller('confirm-orders')
export class ConfirmOrdersController {
  constructor(private confirmOrdersService: ConfirmOrdersService) {}
}
