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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmOrdersController = void 0;
const common_1 = require("@nestjs/common");
const confirm_orders_service_1 = require("./confirm-orders.service");
const create_confirm_order_dto_1 = require("./dtos/create-confirm-order.dto");
const update_confirm_order_dto_1 = require("./dtos/update-confirm-order.dto");
let ConfirmOrdersController = class ConfirmOrdersController {
    constructor(confirmOrdersService) {
        this.confirmOrdersService = confirmOrdersService;
    }
    getAll() {
        return this.confirmOrdersService.getAll();
    }
    async getById(id) {
        const cord = await this.confirmOrdersService.getById(id);
        if (!cord)
            throw new common_1.NotFoundException('Confirmed order not found');
        return cord;
    }
    async deleteById(id) {
        if (!(await this.confirmOrdersService.getById(id)))
            throw new common_1.NotFoundException('Confirmed order not found');
        await this.confirmOrdersService.deleteById(id);
        return { success: true };
    }
    create(confirmOrderData) {
        return this.confirmOrdersService.create(confirmOrderData);
    }
    async update(id, confirmOrderData) {
        if (!(await this.confirmOrdersService.getById(id)))
            throw new common_1.NotFoundException('Confirmed order not found');
        await this.confirmOrdersService.updateById(id, confirmOrderData);
        return { success: true };
    }
};
exports.ConfirmOrdersController = ConfirmOrdersController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ConfirmOrdersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfirmOrdersController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfirmOrdersController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_confirm_order_dto_1.CreateConfirmOrderDTO]),
    __metadata("design:returntype", void 0)
], ConfirmOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_confirm_order_dto_1.UpdateConfirmOrderDTO]),
    __metadata("design:returntype", Promise)
], ConfirmOrdersController.prototype, "update", null);
exports.ConfirmOrdersController = ConfirmOrdersController = __decorate([
    (0, common_1.Controller)('confirm-orders'),
    __metadata("design:paramtypes", [confirm_orders_service_1.ConfirmOrdersService])
], ConfirmOrdersController);
//# sourceMappingURL=confirm-orders.controller.js.map