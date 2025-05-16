import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    let user = this.userRepository.create(createUserDto);
    try {
      user = await this.userRepository.save(user);
    } catch (e) {
      throw new BadRequestException(e, {
        description: 'User could not be saved.',
      });
    }

    const { password, ...userData } = user;

    return userData as User;
  }
}
