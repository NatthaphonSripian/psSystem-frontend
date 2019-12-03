import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BankComponent } from './bank/bank.component';
import { BanklistComponent } from './banklist/banklist.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { FundComponent } from './fund/fund.component';
import { FundlistComponent } from './fundlist/fundlist.component';
import { PositionComponent } from './position/position.component';
import { PositionlistComponent } from './positionlist/positionlist.component';

const routes: Routes = [
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
  }
];

// Angular
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
