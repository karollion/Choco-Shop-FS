import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OrdersModule } from './orders/orders.module';
import { ConfirmOrdersModule } from './confirm-orders/confirm-orders.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as cors from 'cors';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ProductsModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '../client'),
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../client', '../public'),
    }),
    OrdersModule,
    ConfirmOrdersModule,
    UsersModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
