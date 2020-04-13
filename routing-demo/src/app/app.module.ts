import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component'; import แค่ที่ app-routing.module
// import { DepartmetnListComponent } from './departmetn-list/departmetn-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeListComponent, import แค่ที่ app-routing.module
    // DepartmetnListComponent
    routingComponent,
    PageNotFoundComponent,
    DepartmentListComponent,
    EmployeesListComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
