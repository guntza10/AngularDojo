import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-for-service1',
  templateUrl: './for-service1.component.html',
  styleUrls: ['./for-service1.component.css']
})
export class ForService1Component implements OnInit {

  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  // ngOnInit ถูกเรียกใช้เมื่อ component ถูกเรียกใช้(ถูกสร้างขึ้น)ครั้งแรก
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}
