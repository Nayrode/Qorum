import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { TokenRequest } from '../model/auth.token.request';
import { TokenResponse } from '../model/auth.token.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) {}
  
  readonly url = 'http://localhost:3000';
  private isAuthenticated = false;
  
  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
  getAccessToken(): string | null{
    return localStorage.getItem('accessToken');
  }
  getCurrentUser() {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return null;
    }
    return JSON.parse(atob(token.split('.')[1])).username;
  }

  login(data: TokenRequest): Observable<boolean> {
    return this.http.post<TokenResponse>(`${this.url}/auth/login`, data).pipe(
      map((res) => {
        localStorage.setItem('accessToken', res.accessToken);
        this.isAuthenticated = true;
        return true;
      }),
      catchError(() => {
        this.isAuthenticated = false;
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    this.isAuthenticated = false;
  }
}
