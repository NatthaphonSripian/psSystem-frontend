import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrginfoComponent } from './orginfo/orginfo.component';

const routes: Routes = [
  {
    path: "orginfo",
    component: OrginfoComponent,
  }
];

// Angular
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule {}
