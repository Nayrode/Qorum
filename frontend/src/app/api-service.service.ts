import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from './dto/login.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSubjects() : Observable<any> {
    return this.http.get(`${this.apiUrl}/subject`);
  }

  login(data: LoginDto) : Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

}
