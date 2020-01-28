import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  // Employee
  {
    path: "employeeinfo",
    component: EmployeeinfoComponent
  },
  {
    path: "employeeinfo/:id",
    component: EmployeeinfoComponent
  },
  {
    path: "employeelist",
    component: EmployeelistComponent
  }
];

// Angular
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
