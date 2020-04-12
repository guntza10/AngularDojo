import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { error } from 'protractor';

@Component({
  selector: 'app-for-service1',
  templateUrl: './for-service1.component.html',
  styleUrls: ['./for-service1.component.css']
})
export class ForService1Component implements OnInit {

  public employees = [];
  public errorMsg;
  // dependency injection service ใน constructor ของ class component ที่เราจะใช้งาน
  constructor(private _employeeService: EmployeeService) {
    // this.employees = new EmployeeService(); -> ไม่ควรทำ เป็น drawback กลับไปอ่านที่ dependency injection ถ้าสงสัย
  }

  // ngOnInit ถูกเรียกใช้เมื่อ component ถูกเรียกใช้(ถูกสร้างขึ้น)ครั้งแรก
  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();

    // fetch data from server or Database
    this._employeeService.getEmployeesFromDB()
      .subscribe(data => {
        // data คือ observable ที่ถูกแปลงมาเป็น data model
        this.employees = data;
      },
      error => {
        // error
        this.errorMsg = error
      });
  }

}
