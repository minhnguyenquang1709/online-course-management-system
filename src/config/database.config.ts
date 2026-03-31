import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

/**
 * Database connection configuration
 */
export const databaseProvider: TypeOrmModuleAsyncOptions = {
  useFactory: () => {
    const poolConfig = {
      max: parseInt(process.env.DB_POOL_MAX ?? '30'),
      min: parseInt(process.env.DB_POOL_MIN ?? '10'),
    };

    return {
      type: 'postgres', // Database type
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      extra: poolConfig,
      autoLoadEntities: true, // auto load entities from the codebase
      synchronize: true, // auto create db schema on app launch (should disable in production)
      ssl: false, // config Secure Sockets Layer
    };
  },
};
