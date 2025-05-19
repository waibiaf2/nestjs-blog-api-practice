import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object (DTO) for user sign-in.
 * It defines the shape of the data expected when a user attempts to log in.
 */
export class SignInDto {
  /**
   * The email address of the user attempting to sign in.
   * - `@ApiProperty` is used by Swagger to generate API documentation,
   *   providing a description and an example value.
   * - `@IsString` ensures the value is a string.
   * - `@IsNotEmpty` ensures the value is not an empty string.
   */
  @ApiProperty({
    description: "The users's registered email address",
    example: 'johndoe@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  /**
   * The password for the user account.
   * - `@ApiProperty` provides a description for Swagger documentation.
   *   Note: It's generally good practice not to provide an example for passwords
   *   in public documentation for security reasons, so omitting `example` here is fine.
   * - `@IsString` ensures the value is a string.
   * - `@IsNotEmpty` ensures the value is not an empty string.
   */
  @ApiProperty({
    description: "The user's  password",
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
