import { Injectable } from '@nestjs/common';
import { Order, OrderOnConfirm } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      where: {
        confirmOrder: {
          none: {
            confirm: {},
          },
        },
      },
      include: {
        product: true,
      },
    });
  }

  public getAllOfUser(userId: string): Promise<Order[]> {
    return this.prismaService.order.findMany({
      where: {
        userId: userId,
        confirmOrder: {
          none: {
            confirm: {},
          },
        },
      },
      include: {
        product: true,
      },
    });
  }

  public getAllDoneOfUser(userId: string): Promise<Order[]> {
    return this.prismaService.order.findMany({
      where: {
        userId: userId,
        confirmOrder: {
          some: {
            confirm: {},
          },
        },
      },
      include: {
        product: true,
      },
    });
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        product: true,
      },
    });
  }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }

  // Omit tworzy nowy interfejs na podstawie Order ale bez "id"
  public create(ordersData: Omit<Order, 'id'>): Promise<Order> {
    return this.prismaService.order.create({
      data: ordersData,
    });
  }

  public updateById(
    id: Order['id'],
    productData: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.prismaService.order.update({
      where: { id },
      data: productData,
    });
  }

  public async addToConfirmOrder(
    confirmData: Omit<OrderOnConfirm, 'id'>,
  ): Promise<Order> {
    const { orderId, confirmId } = confirmData;
    return await this.prismaService.order.update({
      where: { id: orderId },
      data: {
        confirmOrder: {
          create: {
            confirm: {
              connect: { id: confirmId },
            },
          },
        },
      },
    });
  }
}
