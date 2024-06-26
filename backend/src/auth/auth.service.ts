import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  validateUser(username: string, pass: string): boolean {
    const user = this.usersService.findOne(username);
    if (user && user.password === pass) {
      return true;
    }
    return false;
  }

  generateAccessToken(user: string): string {
    const appKey = process.env.APP_KEY;
    const payload = { username: user };
    const accessToken = sign(payload, appKey);
    return accessToken;
  }
}
