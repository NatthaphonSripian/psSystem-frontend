import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrganization } from '../../../interface/organization/organization-interface';
import { OrganizationService } from './../../../service/organization.service';

@Component({
  selector: "app-orginfo",
  templateUrl: "./orginfo.component.html"
})
export class OrginfoComponent implements OnInit {
  organization = { id: null } as IOrganization;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _organization: OrganizationService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    if (id) {
      this.onLoadDataOrg(id);
    }
  }

  onLoadDataOrg(id: number) {
    this._organization.getOrganizationById(id).subscribe(data => {
      Object.assign(this.organization, data);
    });
  }

  onSave() {
    this._organization.saveOrganization(this.organization).subscribe(data => {
      Object.assign(this.organization, data);
    });
  }
}
