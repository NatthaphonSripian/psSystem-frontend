import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrginfoComponent } from './orginfo/orginfo.component';
import { OrglistComponent } from './orglist/orglist.component';

// Angular
@NgModule({
  imports: [CommonModule, FormsModule, OrganizationRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot()],
  declarations: [
    OrginfoComponent,
    OrglistComponent
  ]
})
export class OrganizationModule {}


