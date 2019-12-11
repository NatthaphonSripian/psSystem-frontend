import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeGroup } from './../../../interface/setup/employee-group';
import { EmployeeGroupService } from './../../../service/employee-group.service';

@Component({
  selector: "app-employee-group",
  templateUrl: "./employee-group.component.html",
  styleUrls: ["./employee-group.component.scss"]
})
export class EmployeeGroupComponent implements OnInit {
  public employeeGroup: EmployeeGroup;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceEmployeeGroup: EmployeeGroupService
  ) {
    this.employeeGroup = { id: null } as EmployeeGroup;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataEmployeeGroup(this.id);
    }
  }

  onLoadDataEmployeeGroup(id: number) {
    this.serviceEmployeeGroup.employeeGroupGetById(this.id).subscribe(
      data => {
        this.employeeGroup = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.serviceEmployeeGroup
      .employeeGroupSave(this.employeeGroup)
      .subscribe(data => {
        this.employeeGroup = data;
      });
  }
}
