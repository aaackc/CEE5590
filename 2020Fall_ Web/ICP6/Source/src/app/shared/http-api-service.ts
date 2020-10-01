import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {


  authorization: string = localStorage.getItem("authenticationToken");
  constructor(
    private http: HttpClient,
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, param: any): Observable<any> {
    let url_ =  path;
    url_ = url_.replace(/[?&]$/, "");
    let options_: any = {
      //        headers: new HttpHeaders({
      //   'Content-Type': 'application/json;'
      //  }),
      params: param
    };
    return this.http.request("get", url_, options_)
      .pipe(catchError(this.formatErrors));
  }

  getWiki(path: string, param: any): Observable<any> {
    let url_ =  path;
    let options_: any = {
      //  headers: new HttpHeaders({
      //   'Content-Type': 'application/json;charset=utf-8;text/html'
      //  }),
      params: param
    };
    return this.http.request("get", url_, options_)
      .pipe(catchError(this.formatErrors));
  }

  private HandleMapObservable(response: Response | any) {
    if (response.text()) {
      return response.json();
    }
  }

  private handleErrorObservable(error: Response | any, router: Router) {
    if (error.statusText == 'Unauthorized') {
      router.navigate(["/signin"]);
    }
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}