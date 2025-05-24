import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from '../dto/sign-in.dto';

@Injectable()
export class SignInProvider {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  public async signIn(signInDto: SignInDto): Promise<string> {
    // Find the user
    // If user is invalid throw exception
    // Verify user credentials including email and password
    // If credentials are valid
    return '';
  }
}
