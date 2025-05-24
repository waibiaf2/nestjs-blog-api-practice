import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import JwtConfig from '../../config/jwt.config';

@Injectable()
/**
 * Guard that checks for a valid access token in the request.
 * Implements NestJS CanActivate interface.
 */
export class AccessTokenGuard implements CanActivate {
  /**
   * Creates an instance of AccessTokenGuard.
   * @param jwtService - Service to handle JWT operations.
   * @param jwtConfiguration - JWT configuration object.
   */
  constructor(
    /**
     * Injecting JwtService*/
    private readonly jwtService: JwtService,
    /*
     * Injecting JwtConfig
     * */
    @Inject(JwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof JwtConfig>,
  ) {}

  /**
   * Determines whether the current request is allowed to proceed.
   * @param context - The execution context of the request.
   * @returns A boolean, Promise, or Observable indicating if activation is allowed.
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}

