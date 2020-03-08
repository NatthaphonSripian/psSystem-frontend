import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEmployeeLevel } from '../../../interface/setup/employee-level-interface';
import { EmployeeLevelService } from './../../../service/employee-level.service';

@Component({
  selector: "app-employee-level",
  templateUrl: "./employee-level.component.html",
  styleUrls: ["./employee-level.component.scss"]
})
export class EmployeeLevelComponent implements OnInit {
  employeeLevel = { id: null } as IEmployeeLevel;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _levelService: EmployeeLevelService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    if (id) {
      this.getEmployeeLevelById(id);
    }
  }

  getEmployeeLevelById(id: number) {
    this._levelService.getEmployeeLevelById(id).subscribe(data => {
      Object.assign(this.employeeLevel, data);
    });
  }

  onSave() {
    this._levelService.saveEmployeeLevel(this.employeeLevel).subscribe(data => {
      Object.assign(this.employeeLevel, data);
    });
  }
}
