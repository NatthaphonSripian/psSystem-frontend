import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEmployeeLevel } from '../interface/setup/employee-level-interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class EmployeeLevelService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _util: ServiceUtil
  ) {}

  public getEmployeeLevelList(): Observable<IEmployeeLevel[]> {
    return this._http
      .get<IEmployeeLevel[]>(`${API_URL.EMPLOYEE_LEVEL_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getEmployeeLevelById(id: number): Observable<IEmployeeLevel> {
    return this._http
      .get<IEmployeeLevel>(`${API_URL.EMPLOYEE_LEVEL_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public saveEmployeeLevel(
    employeeLevel: IEmployeeLevel
  ): Observable<IEmployeeLevel> {
    return this._http
      .post<IEmployeeLevel>(`${API_URL.EMPLOYEE_LEVEL_SAVE}`, employeeLevel, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_LEVEL)));
  }

  public deleteEmployeeLevel(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.EMPLOYEE_LEVEL_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(false, res, TEXT.TITLE_LEVEL)));
  }
}
