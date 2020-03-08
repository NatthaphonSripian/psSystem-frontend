import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IEmployee } from '../../../interface/employee/employee-interface';
import { EmployeeService } from './../../../service/employee.service';

@Component({
  selector: "app-employeelist",
  templateUrl: "./employeelist.component.html",
  styleUrls: ["./employeelist.component.scss"]
})
export class EmployeelistComponent implements OnInit {
  public employeeList: IEmployee[] = [];
  public employeeListFiltered: IEmployee[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this._employeeService.getEmployeeLList().subscribe((res: IEmployee[]) => {
      this.employeeList = res;
      this.employeeListFiltered = [];
      if (this.employeeList.length > 0) {
        this.employeeListFiltered = this.employeeList.map(employee => {
          const validText =
            this.isValidString(employee.titleName) &&
            this.isValidString(employee.firstName) &&
            this.isValidString(employee.lastName);
          employee.displayName = validText
            ? `${employee.titleName} ${employee.firstName} ${employee.lastName}`
            : `${employee.firstName} ${employee.lastName}`;

          return employee;
        });
      }
    });
  }

  isValidString(value: string) {
    return value !== "" && value !== null;
  }

  updateEmployee(id: number) {
    this._router.navigate(["employee/employeeinfo", id]);
  }

  deleteEmployee(id: number) {
    this._employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployeeList();
    });
  }
}
