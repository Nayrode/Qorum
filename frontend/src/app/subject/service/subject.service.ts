import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../model/subject.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  readonly url = 'http://localhost:3000';

  getSubjects(): Observable<any> {
    return this.http.get(`${this.url}/subject`);
  }
}
