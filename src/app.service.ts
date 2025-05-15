import { Inject, Injectable } from '@nestjs/common';
import appConfig from './config/app.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly appConfiguration: ConfigType<typeof appConfig>,
  ) {}
  getHello(): string {
    console.log(this.appConfiguration.environment);
    return 'Hello World!';
  }
}
