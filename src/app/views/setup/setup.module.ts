import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
import { SetupRoutingModule } from './setup-routing.module';

// Angular
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SetupRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    BankComponent,
    BanklistComponent,
    FundComponent,
    FundlistComponent,
    DepartmentComponent,
    DepartmentlistComponent,
    PositionlistComponent,
    PositionComponent,
    EmployeeGroupComponent,
    EmployeeGroupListComponent,
    EmployeeLevelComponent,
    EmployeeLevelListComponent
  ]
})
export class SetupModule {}
