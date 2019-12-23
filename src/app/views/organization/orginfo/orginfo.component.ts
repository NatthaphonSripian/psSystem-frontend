import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Organization } from './../../../interface/organization/organization';
import { OrganizationService } from './../../../service/organization.service';

@Component({
  selector: "app-orginfo",
  templateUrl: "./orginfo.component.html"
})
export class OrginfoComponent implements OnInit{
  public organization: Organization;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servieOrg: OrganizationService
  ) {
    this.organization = { id: null } as Organization;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataOrg(this.id);
    }
}

  onLoadDataOrg(id: number) {
    this.servieOrg.orgGetById(this.id).subscribe(
      data => {
        this.organization = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.servieOrg.orgSave(this.organization).subscribe(data => {
      this.organization = data;
    });
  }
}
