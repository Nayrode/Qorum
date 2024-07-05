import {
  Body,
  Controller,
  Post,
  Response,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.login.dto';
import { Public } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() data: LoginDto) {
    if (!this.authService.validateUser(data.username, data.password))
      throw new UnauthorizedException();
    return {
      accessToken: await this.authService.generateAccessToken(data.username),
    };
  }
}
