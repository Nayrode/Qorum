import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly users = [
    {
      id: 1,
      username: 'demo',
      password: 'demo',
    },
  ];

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
  async getUserById(id: string): Promise<Omit<User, 'password'>> {
    if (id === '1') {
      return {
        id: '1',
        name: 'demo',
        email: 'demo@demo.fr',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
