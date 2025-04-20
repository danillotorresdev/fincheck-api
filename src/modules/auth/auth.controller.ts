import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { SigninDto } from 'src/modules/auth/dtos/signin';
import { SignupDto } from 'src/modules/auth/dtos/signup';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
