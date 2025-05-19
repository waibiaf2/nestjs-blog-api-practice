import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { UsersController } from './users.controller';
import { CreateUserProvider } from './providers/create-user.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { FindUserByEmailProvider } from './providers/find-user-by-email-provider';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [UsersService, CreateUserProvider, FindUserByEmailProvider],
  controllers: [UsersController],
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
