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
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const ord = await this.ordersService.getById(id);
    if (!ord) throw new NotFoundException('Order not found');
    return ord;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.ordersService.getById(id)))
      throw new NotFoundException('Order not found');
    await this.ordersService.deleteById(id);
    return { success: true };
  }

  // @Post('/')
  // create(@Body() orderData: CreateOrderDTO) {
  //   return this.ordersService.create(orderData);
  // }

  // @Put('/:id')
  // async update(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @Body() orderData: UpdateOrderDTO,
  // ) {
  //   if (!(await this.ordersService.getById(id)))
  //     throw new NotFoundException('Order not found');

  //   await this.ordersService.updateById(id, orderData);
  //   return { success: true };
  // }
}
