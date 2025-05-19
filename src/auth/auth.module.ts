import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { AuthController } from './auth.controller';
import { SignInProvider } from './providers/sign-in-provider';
import { UsersModule } from '../users/users.module';
import { HashingProvider } from './providers/hashing-provider';
import { BcryptProvider } from './providers/bcrypt-provider';

@Module({
  providers: [
    AuthService,
    SignInProvider,
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
    BcryptProvider,
  ],
  controllers: [AuthController],
  imports: [forwardRef(() => UsersModule)],
  exports: [AuthService, HashingProvider],
})
export class AuthModule {}
