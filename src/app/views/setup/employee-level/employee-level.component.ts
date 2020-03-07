import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEmployeeLevel } from '../../../interface/setup/employee-level-interface';
import { EmployeeLevelService } from './../../../service/employee-level.service';

@Component({
  selector: "app-employee-level",
  templateUrl: "./employee-level.component.html",
  styleUrls: ["./employee-level.component.scss"]
})
export class EmployeeLevelComponent implements OnInit {
  public employeeLevel: IEmployeeLevel;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceEmployeeLevel: EmployeeLevelService
  ) {
    this.employeeLevel = { id: null } as IEmployeeLevel;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataEmployeeLevel(this.id);
    }
  }

  onLoadDataEmployeeLevel(id: number) {
    this.serviceEmployeeLevel.employeeLevelGetById(this.id).subscribe(
      data => {
        this.employeeLevel = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.serviceEmployeeLevel
      .employeeLevelSave(this.employeeLevel)
      .subscribe(data => {
        this.employeeLevel = data;
      });
  }
}
