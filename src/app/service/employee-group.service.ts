import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEmployeeGroup } from '../interface/setup/employee-group-interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class EmployeeGroupService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _util: ServiceUtil
  ) {}

  public getEmployeeGroupList(): Observable<IEmployeeGroup[]> {
    return this._http
      .get<IEmployeeGroup[]>(`${API_URL.EMPLOYEE_GROUP_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getEmployeeGroupById(id: number): Observable<IEmployeeGroup> {
    return this._http
      .get<IEmployeeGroup>(`${API_URL.EMPLOYEE_GROUP_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public saveEmployeeGroup(employeeGroup: IEmployeeGroup): Observable<any> {
    return this._http
      .post<IEmployeeGroup>(`${API_URL.EMPLOYEE_GROUP_SAVE}`, employeeGroup, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_GROUP)));
  }

  public deleteEmployeeGroupById(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.EMPLOYEE_GROUP_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(false, res, TEXT.TITLE_GROUP)));
  }
}
