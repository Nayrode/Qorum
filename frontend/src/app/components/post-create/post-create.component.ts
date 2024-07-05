import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutBarComponent } from '../layout-bar/layout-bar.component';
import { PostService } from '../post-item/service/post.service';
import { AuthService } from '../auth/service/auth.service';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, LayoutBarComponent],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  subjectId: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private authService: AuthService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.subjectId = params.get('id');
    });
  }

  onBack() {
    if (this.subjectId) {
      this.router.navigate(['subjects', this.subjectId]);
    } else {
      console.error('Subject ID is not available');
    }
  }

  async onCreatePost(form: NgForm) {
    const data = {
      title: form.value.title,
      content: form.value.content,
      authorId: (await this.usersService.getCurrentUser()).id,
      threadId: this.threadId || '',
    };

    try {
      await this.postsService.createPost(data);
      this.router.navigate(['threads', this.threadId]);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'An unknown error occurred';
      }
    }
  }
}
