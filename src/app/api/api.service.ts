import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  errorMgmt;
  constructor(private http: HttpClient) { }

  getUser(data): Observable<any> {
    let API_URL = `${this.endpoint}/getuser`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  registerUser(data): Observable<any> {
    let API_URL = `${this.endpoint}/registerUser`;
    return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  updateContent(data): Observable<any> {
    let API_URL = `${this.endpoint}/updateContent`;
    return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getContent(data): Observable<any> {
    let API_URL = `${this.endpoint}/getContent`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

}
