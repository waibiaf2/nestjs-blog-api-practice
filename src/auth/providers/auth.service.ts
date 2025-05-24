import { Injectable } from '@nestjs/common';
import { SignInDto } from '../dto/sign-in.dto';

@Injectable()
export class AuthService {
  
  signIn(signInDto: SignInDto) {
    return signInDto;
  }
}
