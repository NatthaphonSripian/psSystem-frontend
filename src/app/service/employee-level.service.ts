import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EmployeeLevel } from './../interface/setup/employee-level';
import { API_URL } from './../shared/constant/api.constant';

@Injectable({
  providedIn: "root"
})
export class EmployeeLevelService {
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

  public employeeLevelGetAll(): Observable<EmployeeLevel[]> {
    return this.http
      .get<EmployeeLevel[]>(`${API_URL.EMPLOYEE_LEVEL_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public employeeLevelGetById(id: number): Observable<EmployeeLevel> {
    return this.http
      .get<EmployeeLevel>(`${API_URL.EMPLOYEE_LEVEL_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public employeeLevelSave(
    employeeLevel: EmployeeLevel
  ): Observable<EmployeeLevel> {
    return this.http
      .post<EmployeeLevel>(`${API_URL.EMPLOYEE_LEVEL_SAVE}`, employeeLevel, {
        headers: this.getHeaders()
      })
      .pipe(
        map(res => res, this.showToaster("Save data success", "Employee Level"))
      );
  }

  public employeeLevelDeleteById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.EMPLOYEE_LEVEL_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(
        map(
          res => res,
          this.showToaster("Dalete data success", "Employee Level")
        )
      );
  }
}