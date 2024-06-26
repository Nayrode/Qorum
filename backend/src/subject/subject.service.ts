import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string) {
    return await this.prisma.subject.create({
      data: {
        name,
      },
    });
  }
  async findAll() {
    return await this.prisma.subject.findMany();
  }
}
