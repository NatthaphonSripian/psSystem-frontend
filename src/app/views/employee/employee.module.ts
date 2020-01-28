import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

// Tabs Component
// Angular
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    ChartsModule,
    TabsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [EmployeeinfoComponent, EmployeelistComponent]
})
export class EmployeeModule {}
