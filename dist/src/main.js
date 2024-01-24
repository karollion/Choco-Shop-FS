"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const express = require("express");
const logger_interceptor_1 = require("./shared/interceptors/logger.interceptor");
const config_1 = require("@nestjs/config");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
    app.setGlobalPrefix('api');
    app.use('/public', express.static('public'));
    await app.enableShutdownHooks();
    await app.listen(configService.get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map