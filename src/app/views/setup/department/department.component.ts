import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IDepartment } from '../../../interface/setup/department-interface';
import { DepartmentService } from './../../../service/department.service';

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"]
})
export class DepartmentComponent implements OnInit {
  public department: IDepartment;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceDepartment: DepartmentService
  ) {
    this.department = { id: null } as IDepartment;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataDepartment(this.id);
    }
  }

  onLoadDataDepartment(id: number) {
    this.serviceDepartment.departmentGetById(this.id).subscribe(
      data => {
        this.department = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.serviceDepartment.departmentSave(this.department).subscribe(data => {
      this.department = data;
    });
  }
}
