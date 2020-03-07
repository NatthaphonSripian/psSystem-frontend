import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IEmployeeGroup } from '../../../interface/setup/employee-group-interface';
import { EmployeeGroupService } from './../../../service/employee-group.service';

@Component({
  selector: "app-employee-group-list",
  templateUrl: "./employee-group-list.component.html",
  styleUrls: ["./employee-group-list.component.scss"]
})
export class EmployeeGroupListComponent implements OnInit {
  public employeeGroupListData: IEmployeeGroup[] = [];
  public employeeGroupListFiltered: IEmployeeGroup[] = [];

  constructor(
    private serviceEmployeeGroup: EmployeeGroupService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadDataEmployeeGroup();
  }

  reloadDataEmployeeGroup() {
    this.serviceEmployeeGroup
      .getEmployeeGroups()
      .subscribe((res: IEmployeeGroup[]) => {
        this.employeeGroupListData = res;

        if (this.employeeGroupListData.length > 0) {
          this.employeeGroupListFiltered = this.employeeGroupListData;
        } else {
          this.employeeGroupListFiltered = [];
        }
      });
  }

  updateEmployeeGroup(id: number) {
    this.router.navigate(["setup/employeegroup", id]);
  }

  deleteEmployeeGroup(id: number) {
    // Delete Data and reload data
    this.serviceEmployeeGroup.deleteEmployeeGroupById(id).subscribe(() => {
      this.reloadDataEmployeeGroup();
    });
  }
}
