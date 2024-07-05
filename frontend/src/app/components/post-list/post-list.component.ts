import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../subject/service/subject.service';
import { PostService } from '../post-item/service/post.service';
import { Subject } from '../subject/model/subject.model';
import { Post } from '../post-item/model/post.model';
import { PostComponent } from '../post-item/post.component';
import { LayoutBarComponent } from '../layout-bar/layout-bar.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, LayoutBarComponent, NgFor, NgIf],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  id!: string;
  subject: Subject | undefined;
  posts: Post[] = [];
  searchQuery: string = '';
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private postsService: PostService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit() {
    console.log('PostListComponent ngOnInit');
    this.loadSubjectAndPosts();
  }

  async loadSubjectAndPosts() {
    this.isLoading = true;
    try {
      this.subjectService.getSubjects().subscribe((subjects) => {
        this.subject = subjects.find(
          (subject: Subject) => subject.id === this.id
        );
      });
    } catch (error) {
      console.error('Error loading thread and posts:', error);
    } finally {
      this.isLoading = false;
    }
  }

  onNewPost() {
    this.router.navigate(['subject', this.id, 'post', 'create']);
  }

  onBack() {
    this.router.navigate(['subjects']);
  }
}
