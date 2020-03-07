import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEmployeeGroup } from '../interface/setup/employee-group-interface';
import { API_URL } from '../shared/constant/api.constant';

@Injectable({
  providedIn: "root"
})
export class EmployeeGroupService {
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

  public getEmployeeGroups(): Observable<IEmployeeGroup[]> {
    return this.http
      .get<IEmployeeGroup[]>(`${API_URL.EMPLOYEE_GROUP_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public getEmployeeGroupById(id: number): Observable<IEmployeeGroup> {
    return this.http
      .get<IEmployeeGroup>(`${API_URL.EMPLOYEE_GROUP_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public saveEmployeeGroup(
    employeeGroup: IEmployeeGroup
  ): Observable<IEmployeeGroup> {
    return this.http
      .post<IEmployeeGroup>(`${API_URL.EMPLOYEE_GROUP_SAVE}`, employeeGroup, {
        headers: this.getHeaders()
      })
      .pipe(
        map(res => res, this.showToaster("Save data success", "EmployeeGroup"))
      );
  }

  public deleteEmployeeGroupById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.EMPLOYEE_GROUP_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(
        map(
          res => res,
          this.showToaster("Dalete data success", "EmployeeGroup")
        )
      );
  }
}
