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
import * as cors from 'cors';

@Module({
  imports: [
    ProductsModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '../client'),
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public'),
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
