import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { databaseOptionsValidator } from './config/validation/database-options.validator';
import { jwtOptionsValidator } from './config/validation/jwt-options.validator';
import { storageOptionsValidator } from './config/validation/storage-options.validator';
import { HealthController } from './health/health.controller';
import { IdentityModule } from './identity/identity.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { PersistenceModule } from './persistence/persistence.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration, databaseOptionsValidator, jwtOptionsValidator, storageOptionsValidator],
    }),
    PersistenceModule,
    IdentityModule,
    InfrastructureModule,
    IntegrationsModule,
    UsersModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
