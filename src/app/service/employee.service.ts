import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEmployee } from '../interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(
    private readonly _http: HttpClient,
    public readonly _util: ServiceUtil
  ) {}

  public getEmployeeLList(): Observable<IEmployee[]> {
    return this._http
      .get<IEmployee[]>(`${API_URL.EMPLOYEE_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getEmployeeById(id: number): Observable<IEmployee> {
    return this._http
      .get<IEmployee>(`${API_URL.EMPLOYEE_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public saveEmployee(employee: IEmployee): Observable<IEmployee> {
    return this._http
      .post<IEmployee>(`${API_URL.EMPLOYEE_SAVE}`, employee, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_EMPLOYEE)));
  }

  public deleteEmployee(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.EMPLOYEE_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(false, res, TEXT.TITLE_EMPLOYEE)));
  }
}
