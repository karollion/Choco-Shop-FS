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
exports.ConfirmOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let ConfirmOrdersService = class ConfirmOrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.confirmOrder.findMany();
    }
    getById(id) {
        return this.prismaService.confirmOrder.findUnique({
            where: { id },
        });
    }
    deleteById(id) {
        return this.prismaService.confirmOrder.delete({
            where: { id },
        });
    }
    create(confirmOrderData) {
        return this.prismaService.confirmOrder.create({
            data: confirmOrderData,
        });
    }
    updateById(id, confirmOrderData) {
        return this.prismaService.confirmOrder.update({
            where: { id },
            data: confirmOrderData,
        });
    }
};
exports.ConfirmOrdersService = ConfirmOrdersService;
exports.ConfirmOrdersService = ConfirmOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConfirmOrdersService);
//# sourceMappingURL=confirm-orders.service.js.map