import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private url = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }

  enroll(user: User) {
    return this.http.post<any>(this.url, user)
      .pipe(catchError(this.errorHandle));
  }

  errorHandle(err: HttpErrorResponse) {
    return throwError(err || 'Server Error');
  }
}
