import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: "The users's registerd email address",
    example: 'johndoe@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "The user's  password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
