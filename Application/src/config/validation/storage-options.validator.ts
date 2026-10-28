import { registerAs } from '@nestjs/config';

export const storageOptionsValidator = registerAs('storage', () => ({
  connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING ?? '',
  containerName: process.env.AZURE_STORAGE_CONTAINER ?? 'files',
}));
