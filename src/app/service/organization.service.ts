import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IOrganization } from '../interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class OrganizationService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _util: ServiceUtil
  ) {}

  public getOrganizationList(): Observable<IOrganization[]> {
    return this._http
      .get<IOrganization[]>(`${API_URL.ORGANIZATION_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getOrganizationById(id: number): Observable<IOrganization> {
    return this._http
      .get<IOrganization>(`${API_URL.ORGANIZATION_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public saveOrganization(
    organization: IOrganization
  ): Observable<IOrganization> {
    return this._http
      .post<IOrganization>(`${API_URL.ORGANIZATION_SAVE}`, organization, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_ORG)));
  }

  public deleteOrganizationById(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.ORGANIZATION_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(false, res, TEXT.TITLE_ORG)));
  }
}
