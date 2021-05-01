import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + authToken
      }
    });
    return next.handle(req);
  }

}
