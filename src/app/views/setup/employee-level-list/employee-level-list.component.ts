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
  public employeeLevelListData: IEmployeeLevel[] = [];
  public employeeLevelListFiltered: IEmployeeLevel[] = [];

  constructor(
    private serviceEmployeeLevel: EmployeeLevelService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadDataEmployeeLevel();
  }

  reloadDataEmployeeLevel() {
    this.serviceEmployeeLevel
      .getEmployeeLevels()
      .subscribe((res: IEmployeeLevel[]) => {
        this.employeeLevelListData = res;

        if (this.employeeLevelListData.length > 0) {
          this.employeeLevelListFiltered = this.employeeLevelListData;
        } else {
          this.employeeLevelListFiltered = [];
        }
      });
  }

  updateEmployeeLevel(id: number) {
    this.router.navigate(["setup/employeelevel", id]);
  }

  deleteEmployeeLevel(id: number) {
    // Delete Data and reload data
    this.serviceEmployeeLevel.employeeLevelDeleteById(id).subscribe(() => {
      this.reloadDataEmployeeLevel();
    });
  }
}
