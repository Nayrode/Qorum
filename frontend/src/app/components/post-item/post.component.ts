import { Component, Input } from '@angular/core';
import { Post } from './model/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';
import { PostService } from './service/post.service';
import { NgIf } from '@angular/common';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'post-item',
  standalone: true,
  imports: [NgIf, PostListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post!: Post;
  userId: string | null = null;
  username!: string;
  subjectId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private postService: PostService
  ) {}

  async ngOnInit() {
    this.userId = this.authService.getCurrentId();
    this.username = this.authService.getCurrentUser();
    this.subjectId = this.route.snapshot.paramMap.get('id') || '';
  }

  onDelete() {
    this.postService.deletePostById(this.post.id);
  }

  onEdit() {
    this.router.navigate([
      'subject',
      this.subjectId,
      'post',
      this.post.id
    ]);
  }
}
