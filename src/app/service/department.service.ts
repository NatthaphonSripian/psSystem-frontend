import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IDepartment } from '../interface/setup/department-interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _util: ServiceUtil
  ) {}

  public getDepartmentList(): Observable<IDepartment[]> {
    return this._http
      .get<IDepartment[]>(`${API_URL.DEPARTMENT_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getDepartmetnById(id: number): Observable<IDepartment> {
    return this._http
      .get<IDepartment>(`${API_URL.DEPARTMENT_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public saveDepartment(bank: IDepartment): Observable<IDepartment> {
    return this._http
      .post<IDepartment>(`${API_URL.DEPARTMENT_SAVE}`, bank, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_DEPARTMENT)));
  }

  public deleteDepartment(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.DEPARTMENT_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(
        map(res => this._util.isSuccess(false, res, TEXT.TITLE_DEPARTMENT))
      );
  }
}
