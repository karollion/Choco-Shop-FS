"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let LoggerInterceptor = class LoggerInterceptor {
    intercept(context, next) {
        const url = context.getArgs()[0].url;
        const method = context.getArgs()[0].method;
        console.log('================================');
        console.log(`${method} ${url} `);
        console.log(`Start request in ${context.getClass().name}`);
        const start = Date.now();
        return next.handle().pipe((0, operators_1.tap)(() => {
            console.log(`Request ended in: ${Date.now() - start}ms`);
            console.log('================================');
        }));
    }
};
exports.LoggerInterceptor = LoggerInterceptor;
exports.LoggerInterceptor = LoggerInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggerInterceptor);
//# sourceMappingURL=logger.interceptor.js.map