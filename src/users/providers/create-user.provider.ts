import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { HashingProvider } from '../../auth/providers/hashing-provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    let user = this.userRepository.create(createUserDto);
    try {
      user.password = await this.hashingProvider.hashPassword(
        createUserDto.password,
      );

      user = await this.userRepository.save(user);
    } catch (e) {
      throw new BadRequestException(e, {
        description: 'User could not be saved.',
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user;

    return userData as User;
  }
}
