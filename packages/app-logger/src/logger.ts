import { Global, Injectable, Logger, Module } from '@nestjs/common';

@Injectable()
export class AppLogger extends Logger {}

@Global()
@Module({
  providers: [AppLogger],
  exports: [AppLogger],
})
export class AppLoggerModule {}

