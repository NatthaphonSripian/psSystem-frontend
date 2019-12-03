import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Department } from './../interface/setup/department';
import { API_URL } from './../shared/constant/api.constant';

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json");
    return headers;
  }

  showToaster(msg: string, title: string) {
    this.toastr.success(msg, title);
  }

  public departmentGetAll(): Observable<Department[]> {
    return this.http
      .get<Department[]>(`${API_URL.DEPARTMENT_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public departmentGetById(id: number): Observable<Department> {
    return this.http
      .get<Department>(`${API_URL.DEPARTMENT_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public departmentSave(bank: Department): Observable<Department> {
    return this.http
      .post<Department>(`${API_URL.DEPARTMENT_SAVE}`, bank, {
        headers: this.getHeaders()
      })
      .pipe(
        map(res => res, this.showToaster("Save data success", "Department"))
      );
  }

  public departmentDeleteById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.DEPARTMENT_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(
        map(res => res, this.showToaster("Dalete data success", "Department"))
      );
  }
}
