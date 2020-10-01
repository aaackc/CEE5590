import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      // })
    });

    // passing control to the next interceptor in the chain, if there is one
    return next.handle(request).pipe(
      catchError((error, caught) => {
        if (error.status === 401) {

          // return Observable.throw(error);
          return throwError(error);
        }
        else {
          // return Observable.throw(error);
          return throwError(error);
        }
      }
      ) as any
    );
  }

}
