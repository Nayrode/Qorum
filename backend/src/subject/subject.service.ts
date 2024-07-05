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
    return Promise.all(
      (await this.prisma.subject.findMany()).map(async (subject) => ({
        id: subject.id,
        name: subject.name,
        postCount: await this.findNumberOfPosts(subject.id),
        createdAt: subject.createdAt,
      })),
    );
  }

  async findNumberOfPosts(subjectId: string) {
    return (
      await this.prisma.subject.findUnique({
        where: {
          id: subjectId,
        },
        select: {
          posts: true,
        },
      })
    ).posts.length;
  }
}
