import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DepartmentListComponent } from './department-list/department-list.component';import แค่ที่ app-routing.module
// import { EmployeesListComponent } from './employees-list/employees-list.component';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeListComponent, import แค่ที่ app-routing.module
    // DepartmetnListComponent
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
