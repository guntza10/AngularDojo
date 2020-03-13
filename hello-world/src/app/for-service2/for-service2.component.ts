import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-for-service2',
  templateUrl: './for-service2.component.html',
  styleUrls: ['./for-service2.component.css']
})
export class ForService2Component implements OnInit {

  public employeesDetail = [];
  constructor(private _employService: EmployeeService) { }

  ngOnInit(): void {
    this.employeesDetail = this._employService.getEmployees();
  }

}
