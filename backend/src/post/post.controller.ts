import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.create.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/:subjectId')
  async createPost(
    @Param('subjectId') subjectId: string,
    @Body() data: CreatePostDto,
    @Req() request: Request,
  ) {
    return this.postService.createPost(request['user'], subjectId, data);
  }

  @Get('/:subjectId')
  async getPostsBySubject(@Param('subjectId') subjectId: string) {
    return this.postService.getPostsBySubject(subjectId);
  }
}
