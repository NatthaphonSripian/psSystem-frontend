import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrginfoComponent } from './orginfo/orginfo.component';

// Angular
@NgModule({
  imports: [CommonModule, FormsModule, OrganizationRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()],
  declarations: [OrginfoComponent]
})
export class OrganizationModule {}


