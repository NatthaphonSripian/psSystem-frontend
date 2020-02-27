import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeGroup, EmployeeLevel } from 'src/app/interface';
import { EmployeeService } from 'src/app/service/employee.service';

import { Employee } from './../../../interface/employee/employee';
import { Address } from './../../../interface/setup/address';
import { EmployeeGroupService } from './../../../service/employee-group.service';
import { EmployeeLevelService } from './../../../service/employee-level.service';

@Component({
  selector: "app-employeeinfo",
  templateUrl: "./employeeinfo.component.html",
  styleUrls: ["./employeeinfo.component.scss"]
})
export class EmployeeinfoComponent implements OnInit {
  public employee: Employee;
  public employeeGroupListData: EmployeeGroup[] = [];
  public employeeLevelListData: EmployeeLevel[] = [];
  public displayEmployeeGroup: string;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceEmployee: EmployeeService,
    private serviceEmployeeGroup: EmployeeGroupService,
    private serviceEmployeeLevel: EmployeeLevelService
  ) {
    this.employee = {
      id: null,
      addresses: { id: null } as Address
    } as Employee;
  }

  ngOnInit() {
    // Load data setup
    this.reloadDataEmployeeGroup();
    this.reloadDataEmployeeLevel();

    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataEmployee(this.id);
    }
  }

  onLoadDataEmployee(id: number) {
    this.serviceEmployee.employeeGetById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.serviceEmployee.employeeSave(this.employee).subscribe(data => {
      this.employee = data;
    });
  }

  reloadDataEmployeeGroup() {
    this.displayEmployeeGroup = "Employee Group";
    this.serviceEmployeeGroup
      .employeeGroupGetAll()
      .subscribe((res: EmployeeGroup[]) => {
        this.employeeGroupListData = res;
      });
  }

  reloadDataEmployeeLevel() {
    this.serviceEmployeeLevel
      .employeeLevelGetAll()
      .subscribe((res: EmployeeLevel[]) => {
        this.employeeLevelListData = res;
      });
  }

  onSelectEmployeeGroup(employeeGroupTemp: EmployeeGroup) {
    this.employee.employeeGroup = employeeGroupTemp;
    this.displayEmployeeGroup = employeeGroupTemp.employeeGroupNameEn;
    console.log(this.employee);
  }

  onSelectEmployeeLevel(employeeLevelTemp: EmployeeLevel) {
    this.employee.employeeLevel = employeeLevelTemp;
    console.log(this.employee);
  }
}
