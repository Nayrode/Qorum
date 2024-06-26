import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/post.create.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(
    userId: string,
    subjectId: string,
    data: CreatePostDto,
  ): Promise<Post> {
    return this.prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        subject: {
          connect: {
            id: subjectId,
          },
        },
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
  async getPostsBySubject(subjectId: string): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {
        subjectId: subjectId,
      },
    });
  }
}
