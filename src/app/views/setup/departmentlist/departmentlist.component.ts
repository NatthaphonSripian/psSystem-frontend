import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IDepartment } from '../../../interface/setup/department-interface';
import { DepartmentService } from './../../../service/department.service';

@Component({
  selector: "app-departmentlist",
  templateUrl: "./departmentlist.component.html",
  styleUrls: ["./departmentlist.component.scss"]
})
export class DepartmentlistComponent implements OnInit {
  public departmentListData: IDepartment[] = [];
  public departmentListFiltered: IDepartment[] = [];

  constructor(
    private serviceDepartment: DepartmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadDataDepartment();
  }

  reloadDataDepartment() {
    this.serviceDepartment.departmentGetAll().subscribe((res: IDepartment[]) => {
      this.departmentListData = res;

      if (this.departmentListData.length > 0) {
        this.departmentListFiltered = this.departmentListData;
      } else {
        this.departmentListFiltered = [];
      }
    });
  }

  updateDepartment(id: number) {
    this.router.navigate(["setup/department", id]);
  }

  deleteDepartment(id: number) {
    // Delete Data and reload data
    this.serviceDepartment.departmentDeleteById(id).subscribe(() => {
      this.reloadDataDepartment();
    });
  }
}
