import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEmployee } from '../interface/employee/employee-interface';
import { API_URL } from '../shared/constant/api.constant';

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
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

  public employeeGetAll(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>(`${API_URL.EMPLOYEE_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public getEmployeeById(id: number): Observable<IEmployee> {
    return this.http
      .get<IEmployee>(`${API_URL.EMPLOYEE_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public employeeSave(employee: IEmployee): Observable<IEmployee> {
    return this.http
      .post<IEmployee>(`${API_URL.EMPLOYEE_SAVE}`, employee, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Save data success", "Employee")));
  }

  public employeeDeleteById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.EMPLOYEE_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(
        map(res => res, this.showToaster("Dalete data success", "Employee"))
      );
  }
}
