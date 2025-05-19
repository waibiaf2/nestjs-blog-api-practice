import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashingProvider } from './hashing-provider';

@Injectable()
export class BcryptProvider implements HashingProvider {
  async hashPassword(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
  }

  async comparePassword(
    password: string | Buffer,
    hash: string,
  ): Promise<boolean> {
    const isPasswordValid = await bcrypt.compare(password, hash);
    return isPasswordValid;
  }
}
