import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrginfoComponent } from './orginfo/orginfo.component';
import { OrglistComponent } from './orglist/orglist.component';

const routes: Routes = [
  {
    path: "orginfo",
    component: OrginfoComponent,
  },
  {
    path: "orginfo/:id",
    component: OrginfoComponent,
  },
  {
    path: "orglist",
    component: OrglistComponent,
  }
];

// Angular
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule {}
