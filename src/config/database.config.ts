import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.DATABASE_TYPE || 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCRONIZE == 'true' ? true : false,
  autoLoadEntities:
    process.env.DATABASE_AUTOLOAD_ENTITIES == 'true' ? true : false,
}));
