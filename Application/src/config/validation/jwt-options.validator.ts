import { registerAs } from '@nestjs/config';

export const jwtOptionsValidator = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET ?? 'change-me-in-production',
  expiresIn: process.env.JWT_EXPIRES_IN ?? '1h',
}));
