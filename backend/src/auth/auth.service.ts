import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { sign } from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  validateUser(username: string, pass: string): boolean {
    const user = this.usersService.findOne(username);
    if (user && user.password === pass) {
      return true;
    }
    return false;
  }

  async generateAccessToken(username: string): Promise<string | null> {
    const appKey = process.env.APP_KEY;
    let user = await this.prisma.user.findUnique({
      where: {
        name: username,
      },
    });
    if (username == 'demo') {
      user = {
        name: 'demo',
        id: '1',
        password: 'demo',
        email: 'demo',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
    if (!user) {
      return null;
    }
    const payload = {
      username: user.name,
      userId: user.id,
    };
    const accessToken = sign(payload, appKey);
    return accessToken;
  }
}
