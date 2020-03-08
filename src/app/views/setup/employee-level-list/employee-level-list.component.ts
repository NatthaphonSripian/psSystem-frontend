import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IEmployeeLevel } from '../../../interface/setup/employee-level-interface';
import { EmployeeLevelService } from './../../../service/employee-level.service';

@Component({
  selector: "app-employee-level-list",
  templateUrl: "./employee-level-list.component.html",
  styleUrls: ["./employee-level-list.component.scss"]
})
export class EmployeeLevelListComponent implements OnInit {
  public employeeLevels: IEmployeeLevel[] = [];
  public employeeLevelListFiltered: IEmployeeLevel[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _levelService: EmployeeLevelService
  ) {}

  ngOnInit() {
    this.getEmployeeLevels();
  }

  getEmployeeLevels() {
    this._levelService
      .getEmployeeLevelList()
      .subscribe((res: IEmployeeLevel[]) => {
        this.employeeLevels = res;
        this.employeeLevelListFiltered = this.employeeLevels;
      });
  }

  updateEmployeeLevel(id: number) {
    this._router.navigate(["setup/employeelevel", id]);
  }

  deleteEmployeeLevel(id: number) {
    this._levelService.deleteEmployeeLevel(id).subscribe(() => {
      this.getEmployeeLevels();
    });
  }
}
