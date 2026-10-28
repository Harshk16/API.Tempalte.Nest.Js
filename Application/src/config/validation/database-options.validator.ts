import { registerAs } from '@nestjs/config';

export const databaseOptionsValidator = registerAs('database', () => ({
  url: process.env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/nestapi',
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  logging: process.env.DATABASE_LOGGING === 'true',
}));
