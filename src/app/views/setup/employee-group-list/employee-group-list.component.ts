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
  public employeeGroupList: IEmployeeGroup[] = [];
  public employeeGroupListFiltered: IEmployeeGroup[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _groupService: EmployeeGroupService
  ) {}

  ngOnInit() {
    this.getEmployeeGroups();
  }

  getEmployeeGroups() {
    this._groupService
      .getEmployeeGroupList()
      .subscribe((res: IEmployeeGroup[]) => {
        this.employeeGroupList = res;
        this.employeeGroupListFiltered = this.employeeGroupList;
      });
  }

  updateEmployeeGroup(id: number) {
    this._router.navigate(["setup/employeegroup", id]);
  }

  deleteEmployeeGroup(id: number) {
    this._groupService.deleteEmployeeGroupById(id).subscribe(() => {
      this.getEmployeeGroups();
    });
  }
}
