import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { FilterExecptionHTTP } from './common/filters/error-handler-http.filter';
import { ZodExceptionFilter } from './common/filters/type-error-handler.filter';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FilterExecptionHTTP
    },
    {
      provide: APP_FILTER,
      useClass: ZodExceptionFilter
    }
  ],
})
export class AppModule {}

