import { registerAs } from '@nestjs/config';
import { Environment } from '../common/enums';

export const configuration = registerAs('app', () => ({
  name: process.env.APP_NAME ?? 'NestApi.Template',
  environment: (process.env.NODE_ENV as Environment) ?? Environment.Development,
  port: Number(process.env.PORT ?? 3000),
  apiPrefix: process.env.API_PREFIX ?? 'api',
}));
