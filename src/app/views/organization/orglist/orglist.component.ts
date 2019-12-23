import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Organization } from './../../../interface/organization/organization';
import { OrganizationService } from './../../../service/organization.service';

@Component({
  selector: 'app-orglist',
  templateUrl: './orglist.component.html',
  styleUrls: ['./orglist.component.scss']
})
export class OrglistComponent implements OnInit {

  public orgListData: Organization[] = [];
  public orgListFiltered: Organization[] = [];

  constructor(private serviceOrganization: OrganizationService, private router: Router) {}

  ngOnInit() {
    this.reloadDataOrg();
  }

  reloadDataOrg() {
    this.serviceOrganization.orgGetAll().subscribe((res: Organization[]) => {
      this.orgListData = res;

      if (this.orgListData.length > 0) {
        this.orgListFiltered = this.orgListData;
      } else {
        this.orgListFiltered = [];
      }
    });
  }

  updateOrg(id: number) {
    this.router.navigate(["organization/orginfo", id]);
  }

  deleteOrg(id: number) {
    // Delete Data and reload data
    this.serviceOrganization.orgDeleteById(id).subscribe(() => {
      this.reloadDataOrg();
    });
  }

}
