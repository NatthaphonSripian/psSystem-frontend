import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IOrganization } from '../../../interface/organization/organization-interface';
import { OrganizationService } from './../../../service/organization.service';

@Component({
  selector: "app-orglist",
  templateUrl: "./orglist.component.html",
  styleUrls: ["./orglist.component.scss"]
})
export class OrglistComponent implements OnInit {
  public orgList: IOrganization[] = [];
  public orgListFiltered: IOrganization[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _orgService: OrganizationService
  ) {}

  ngOnInit() {
    this.getOrganizationList();
  }

  getOrganizationList() {
    this._orgService.getOrganizationList().subscribe((res: IOrganization[]) => {
      this.orgList = res;
      this.orgListFiltered = this.orgList;
    });
  }

  updateOrg(id: number) {
    this._router.navigate(["organization/orginfo", id]);
  }

  deleteOrg(id: number) {
    this._orgService.deleteOrganizationById(id).subscribe(() => {
      this.getOrganizationList();
    });
  }
}
