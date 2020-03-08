import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDepartment } from '../../../interface/setup/department-interface';
import { DepartmentService } from './../../../service/department.service';

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"]
})
export class DepartmentComponent implements OnInit {
  department = { id: null } as IDepartment;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _departmentService: DepartmentService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    if (id) {
      this.onLoadDataDepartment(id);
    }
  }

  onLoadDataDepartment(id: number) {
    this._departmentService.getDepartmetnById(id).subscribe(data => {
      Object.assign(this.department, data);
    });
  }

  onSave() {
    this._departmentService.saveDepartment(this.department).subscribe(data => {
      Object.assign(this.department, data);
    });
  }
}
