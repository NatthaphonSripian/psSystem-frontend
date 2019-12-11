import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BankComponent } from './bank/bank.component';
import { BanklistComponent } from './banklist/banklist.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeeGroupListComponent } from './employee-group-list/employee-group-list.component';
import { EmployeeGroupComponent } from './employee-group/employee-group.component';
import { EmployeeLevelListComponent } from './employee-level-list/employee-level-list.component';
import { EmployeeLevelComponent } from './employee-level/employee-level.component';
import { FundComponent } from './fund/fund.component';
import { FundlistComponent } from './fundlist/fundlist.component';
import { PositionComponent } from './position/position.component';
import { PositionlistComponent } from './positionlist/positionlist.component';

const routes: Routes = [
  // Bank
  {
    path: "bank",
    component: BankComponent
  },
  {
    path: "bank/:id",
    component: BankComponent
  },
  {
    path: "banklist",
    component: BanklistComponent
  },

  // Fund
  {
    path: "fund",
    component: FundComponent
  },
  {
    path: "fund/:id",
    component: FundComponent
  },
  {
    path: "fundlist",
    component: FundlistComponent
  },

  // Department
  {
    path: "department",
    component: DepartmentComponent
  },
  {
    path: "department/:id",
    component: DepartmentComponent
  },
  {
    path: "departmentlist",
    component: DepartmentlistComponent
  },

  // Position
  {
    path: "position",
    component: PositionComponent
  },
  {
    path: "position/:id",
    component: PositionComponent
  },
  {
    path: "positionlist",
    component: PositionlistComponent
  },

  // Employee Group
  {
    path: "employeegroup",
    component: EmployeeGroupComponent
  },
  {
    path: "employeegroup/:id",
    component: EmployeeGroupComponent
  },
  {
    path: "employeegrouplist",
    component: EmployeeGroupListComponent
  },

  // Employee Level
  {
    path: "employeelevel",
    component: EmployeeLevelComponent
  },
  {
    path: "employeelevel/:id",
    component: EmployeeLevelComponent
  },
  {
    path: "employeelevellist",
    component: EmployeeLevelListComponent
  }
];

// Angular
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
