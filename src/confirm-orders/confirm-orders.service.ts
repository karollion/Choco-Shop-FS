import { Injectable } from '@nestjs/common';
import { ConfirmOrder } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ConfirmOrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<ConfirmOrder[]> {
    return this.prismaService.confirmOrder.findMany();
  }

  public getById(id: ConfirmOrder['id']): Promise<ConfirmOrder | null> {
    return this.prismaService.confirmOrder.findUnique({
      where: { id },
    });
  }

  public deleteById(id: ConfirmOrder['id']): Promise<ConfirmOrder> {
    return this.prismaService.confirmOrder.delete({
      where: { id },
    });
  }

  public create(
    confirmOrderData: Omit<ConfirmOrder, 'id'>,
  ): Promise<ConfirmOrder> {
    return this.prismaService.confirmOrder.create({
      data: confirmOrderData,
    });
  }

  public updateById(
    id: ConfirmOrder['id'],
    confirmOrderData: Omit<ConfirmOrder, 'id'>,
  ): Promise<ConfirmOrder> {
    return this.prismaService.confirmOrder.update({
      where: { id },
      data: confirmOrderData,
    });
  }
}
