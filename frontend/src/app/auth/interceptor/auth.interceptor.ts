import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const auth = inject(AuthService);
  const accessToken = auth.getAccessToken();
  
  if (!accessToken) { 
    return next(req)
  }
  
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return next(newReq)
}

