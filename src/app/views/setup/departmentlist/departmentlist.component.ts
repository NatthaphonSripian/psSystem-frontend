import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDepartment } from 'src/app/interface';

import { DepartmentService } from './../../../service/department.service';

@Component({
  selector: "app-departmentlist",
  templateUrl: "./departmentlist.component.html",
  styleUrls: ["./departmentlist.component.scss"]
})
export class DepartmentlistComponent implements OnInit {
  public departmentList: IDepartment[] = [];
  public departmentListFiltered: IDepartment[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _departmentService: DepartmentService
  ) {}

  ngOnInit() {
    this.getDepartmentList();
  }

  getDepartmentList() {
    this._departmentService
      .getDepartmentList()
      .subscribe((res: IDepartment[]) => {
        this.departmentList = res;
        this.departmentListFiltered = this.departmentList;
      });
  }

  updateDepartment(id: number) {
    this._router.navigate(["setup/department", id]);
  }

  deleteDepartment(id: number) {
    this._departmentService.deleteDepartment(id).subscribe(() => {
      this.getDepartmentList();
    });
  }
}
