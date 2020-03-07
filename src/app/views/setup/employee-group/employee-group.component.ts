import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEmployeeGroup } from '../../../interface/setup/employee-group-interface';
import { EmployeeGroupService } from './../../../service/employee-group.service';

@Component({
  selector: "app-employee-group",
  templateUrl: "./employee-group.component.html",
  styleUrls: ["./employee-group.component.scss"]
})
export class EmployeeGroupComponent implements OnInit {
  public employeeGroup: IEmployeeGroup;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private groupService: EmployeeGroupService
  ) {
    this.employeeGroup = { id: null } as IEmployeeGroup;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataEmployeeGroup(this.id);
    }
  }

  onLoadDataEmployeeGroup(id: number) {
    this.groupService.getEmployeeGroupById(this.id).subscribe(
      data => {
        this.employeeGroup = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.groupService.saveEmployeeGroup(this.employeeGroup).subscribe(data => {
      this.employeeGroup = data;
    });
  }
}
