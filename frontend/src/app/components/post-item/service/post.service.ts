import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPostsBySubjectId(id: string): Post[] | PromiseLike<Post[]> {
    throw new Error('Method not implemented.');
  }
  deletePostById(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  readonly url = 'http://localhost:3000';

  getPost(subjectId: string): Observable<any> {
    return this.http.get(`${this.url}/post/${subjectId}`);
  }
  createPost(subjectId: string, post: Post): Observable<any> {
    return this.http.post(`${this.url}/subject/${subjectId}`, post);
  }
}
