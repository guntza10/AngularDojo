import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmetnListComponent } from './departmetn-list/departmetn-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {
    path: 'departments', component: DepartmetnListComponent
  },
  {
    path: 'employees', component: EmployeeListComponent
  }
];

@NgModule({
  // routes ที่โดนสร้างจะถูกส่งมาที่นี่ แล้ว export RouterModule ไปใช้
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmetnListComponent, EmployeeListComponent];
