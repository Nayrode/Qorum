import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.create.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    createPost(subjectId: string, data: CreatePostDto, request: Request): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        subjectId: string;
    }>;
    getPostsBySubject(subjectId: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        subjectId: string;
    }[]>;
}
