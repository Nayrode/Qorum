import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  private readonly users = [
    {
      userId: 1,
      username: 'demo',
      password: 'demo',
    },
  ];

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
