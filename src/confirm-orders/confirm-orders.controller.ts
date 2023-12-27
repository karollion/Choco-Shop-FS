import {
  //Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  //Post,
  //Put,
} from '@nestjs/common';
import { ConfirmOrdersService } from './confirm-orders.service';

@Controller('confirm-orders')
export class ConfirmOrdersController {
  constructor(private confirmOrdersService: ConfirmOrdersService) {}

  @Get('/')
  getAll(): any {
    return this.confirmOrdersService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const cord = await this.confirmOrdersService.getById(id);
    if (!cord) throw new NotFoundException('Confirmed order not found');
    return cord;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.confirmOrdersService.getById(id)))
      throw new NotFoundException('Confirmed order not found');
    await this.confirmOrdersService.deleteById(id);
    return { success: true };
  }

  // @Post('/')
  // create(@Body() confirmOrderData: CreateConfirmOrderDTO) {
  //   return this.confirmOrdersService.create(confirmOrderData);
  // }

  // @Put('/:id')
  // async update(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @Body() confirmOrderData: UpdateConfirmOrderDTO,
  // ) {
  //   if (!(await this.confirmOrdersService.getById(id)))
  //     throw new NotFoundException('Confirmed order not found');

  //   await this.confirmOrdersService.updateById(id, confirmOrderData);
  //   return { success: true };
  // }
}
