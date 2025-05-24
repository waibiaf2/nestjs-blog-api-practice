import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  token: process.env.JWT_TOKEN_AUDIENCE,
  issuer: process.env.JWT_TOKEN_ISSUER,
  accessTokenTTL: parseInt(process.env.JWT_ACCESS_TOKEN_TTL ?? '30600', 10),
}));
