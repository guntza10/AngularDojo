import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { id: 1, name: "Gunt", age: 25 },
      { id: 2, name: "Nerd", age: 26 },
      { id: 3, name: "Diamond", age: 24 },
      { id: 4, name: "Leng", age: 23 },
    ];
  }
}
