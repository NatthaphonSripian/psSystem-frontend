import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

import { Employee } from './../../../interface/employee/employee';

@Component({
  selector: "app-employeeinfo",
  templateUrl: "./employeeinfo.component.html",
  styleUrls: ["./employeeinfo.component.scss"]
})
export class EmployeeinfoComponent implements OnInit {
  public employee: Employee;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servieEmployee: EmployeeService
  ) {
    this.employee = { id: null } as Employee;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataEmployee(this.id);
    }
  }

  onLoadDataEmployee(id: number) {
    this.servieEmployee.employeeGetById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.servieEmployee.employeeSave(this.employee).subscribe(data => {
      this.employee = data;
    });
  }
}
