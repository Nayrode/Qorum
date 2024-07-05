import { Component, Input } from '@angular/core';
import { Post } from './model/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post!: Post;
  userId: string | null = null;
  userEmail!: string;
  threadId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private postService: PostService
  ) {}

  async ngOnInit() {
    this.userId = this.authService.getCurrentId();
    this.userEmail = (
      await this.authService.getUserById(this.post.authorId)
    ).email;
    this.threadId = this.route.snapshot.paramMap.get('id') || '';
  }

  onDelete() {
    this.postsService.deletePostById(this.post.id);
  }

  onEdit() {
    this.router.navigate([
      'threads',
      this.threadId,
      'posts',
      this.post.id,
      'edit',
    ]);
  }
}
