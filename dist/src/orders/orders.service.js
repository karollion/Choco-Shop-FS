"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
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
    getAllOfUser(userId) {
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
    getAllDoneOfUser(userId) {
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
    getById(id) {
        return this.prismaService.order.findUnique({
            where: { id },
            include: {
                product: true,
            },
        });
    }
    deleteById(id) {
        return this.prismaService.order.delete({
            where: { id },
        });
    }
    create(ordersData) {
        return this.prismaService.order.create({
            data: ordersData,
        });
    }
    updateById(id, productData) {
        return this.prismaService.order.update({
            where: { id },
            data: productData,
        });
    }
    async addToConfirmOrder(confirmData) {
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
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map