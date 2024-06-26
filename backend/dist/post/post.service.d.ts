import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/post.create.dto';
export declare class PostService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPost(userId: string, subjectId: string, data: CreatePostDto): Promise<Post>;
    getPostsBySubject(subjectId: string): Promise<Post[]>;
}
