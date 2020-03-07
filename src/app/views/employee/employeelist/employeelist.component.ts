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
  public employeeListData: IEmployee[] = [];
  public employeeListFiltered: IEmployee[] = [];

  constructor(
    private serviceEmployee: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadDataemployee();
  }

  reloadDataemployee() {
    this.serviceEmployee.employeeGetAll().subscribe((res: IEmployee[]) => {
      this.employeeListData = res;
      console.log(this.employeeListData);
      this.employeeListFiltered = [];
      if (this.employeeListData.length > 0) {
        this.employeeListFiltered = this.employeeListData.map(employee => {
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
    this.router.navigate(["employee/employeeinfo", id]);
  }

  deleteEmployee(id: number) {
    // Delete Data and reload data
    this.serviceEmployee.employeeDeleteById(id).subscribe(() => {
      this.reloadDataemployee();
    });
  }
}
