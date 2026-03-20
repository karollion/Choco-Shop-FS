"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmOrdersModule = void 0;
const common_1 = require("@nestjs/common");
const confirm_orders_controller_1 = require("./confirm-orders.controller");
const confirm_orders_service_1 = require("./confirm-orders.service");
const prisma_service_1 = require("../shared/services/prisma.service");
let ConfirmOrdersModule = class ConfirmOrdersModule {
};
exports.ConfirmOrdersModule = ConfirmOrdersModule;
exports.ConfirmOrdersModule = ConfirmOrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [confirm_orders_controller_1.ConfirmOrdersController],
        providers: [confirm_orders_service_1.ConfirmOrdersService, prisma_service_1.PrismaService],
    })
], ConfirmOrdersModule);
//# sourceMappingURL=confirm-orders.module.js.map