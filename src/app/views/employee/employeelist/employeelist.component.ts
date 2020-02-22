import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from './../../../interface/employee/employee';
import { EmployeeService } from './../../../service/employee.service';

@Component({
  selector: "app-employeelist",
  templateUrl: "./employeelist.component.html",
  styleUrls: ["./employeelist.component.scss"]
})
export class EmployeelistComponent implements OnInit {
  public employeeListData: Employee[] = [];
  public employeeListFiltered: Employee[] = [];

  constructor(
    private serviceEmployee: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadDataemployee();
  }

  reloadDataemployee() {
    this.serviceEmployee.employeeGetAll().subscribe((res: Employee[]) => {
      this.employeeListData = res;
      console.log(this.employeeListData);
      if (this.employeeListData.length > 0) {
        this.employeeListFiltered = this.employeeListData;
      } else {
        this.employeeListFiltered = [];
      }
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(["employee/employee", id]);
  }

  deleteEmployee(id: number) {
    // Delete Data and reload data
    this.serviceEmployee.employeeDeleteById(id).subscribe(() => {
      this.reloadDataemployee();
    });
  }
}
