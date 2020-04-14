import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [
  // default path
  {
    path: '', redirectTo: 'departments', pathMatch: 'full'
    // path: '', redirectTo: 'departments-list', pathMatch: 'full' -> for relative navigation

    // path '' (empty path) กำหนด pathMatch เป็น prefix ไม่ได้ จะทำให้เข้า path ไหนก็จะเข้ามาที่ path '' เสมอ เนื่องจาก path '' เป็น prefix path ของทุก path
    // path: '', component: DepartmetnListComponent ไม่นิยมทำแบบนี้เพราะ ถ้าเป็น path ที่เรามีอยู่แล้ว ให้ redirectTo ไป path ที่เรามี
  },
  {
    path: 'departments', component: DepartmentListComponent
    // path: 'departments-list', component: DepartmentListComponent -> for relative navigation
  },
  // route parameter
  {
    path: 'departments/:id', component: DepartmentDetailComponent,
    // path: 'departments-list/:id', component: DepartmentDetailComponent -> for relative navigation

    // child routes
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  {
    path: 'employees', component: EmployeesListComponent
  },
  //wildcard route
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  // routes ที่โดนสร้างจะถูกส่งมาที่นี่ แล้ว export RouterModule ไปใช้
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent,
  EmployeesListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent
];
