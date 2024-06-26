import { Controller, Get, Param, Post } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post('/:name')
  create(@Param('name') name: string) {
    return this.subjectService.create(name);
  }

  @Get('/')
  async findAll() {
    return await this.subjectService.findAll();
  }
}
