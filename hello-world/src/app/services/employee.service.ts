import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from 'src/models/IEmployess';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // url ที่ใช้ยิง request ไปที่ api หรือ server
  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) {

  }

  getEmployees() {
    return [
      { id: 1, name: "Gunt", age: 25 },
      { id: 2, name: "Nerd", age: 26 },
      { id: 3, name: "Diamond", age: 24 },
      { id: 4, name: "Leng", age: 23 },
    ];
  }

  // return เป็น observable ที่มี Type เป็น IEmployee[]
  getEmployeesFromDB(): Observable<IEmployee[]> {
    // cast http response (observable) -> ให้เป็น Type IEmployee[]
    return this.http.get<IEmployee[]>(this._url)
      // .catchError(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    // a || b คือถ้า a เป็น null ให้ใช้ b
    // return Observable.throwError(error.message || "Server Error");
  }


}
