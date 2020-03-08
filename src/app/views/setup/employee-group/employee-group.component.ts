import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEmployeeGroup } from '../../../interface/setup/employee-group-interface';
import { EmployeeGroupService } from './../../../service/employee-group.service';

@Component({
  selector: "app-employee-group",
  templateUrl: "./employee-group.component.html",
  styleUrls: ["./employee-group.component.scss"]
})
export class EmployeeGroupComponent implements OnInit {
  employeeGroup = { id: null } as IEmployeeGroup;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _groupService: EmployeeGroupService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    if (id) {
      this.getEmployeeGroupById(id);
    }
  }

  getEmployeeGroupById(id: number) {
    this._groupService.getEmployeeGroupById(id).subscribe(data => {
      Object.assign(this.employeeGroup, data);
    });
  }

  onSave() {
    this._groupService.saveEmployeeGroup(this.employeeGroup).subscribe(data => {
      Object.assign(this.employeeGroup, data);
    });
  }
}
