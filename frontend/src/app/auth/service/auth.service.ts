import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenRequest } from '../model/auth.token.request';
import { TokenResponse } from '../model/auth.token.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  readonly url = 'http://localhost:3000';

  getAccessToken(): string | null{
    return localStorage.getItem('accessStorage');
  }

  login(data: TokenRequest) {
    this.http.post<TokenResponse>(`${this.url}/auth/login`, data).subscribe((res) => {
      console.log(res.accessToken)
      localStorage.setItem('accessToken', res.accessToken);
    });
  }
}
