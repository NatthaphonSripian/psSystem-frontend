import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPosition } from '../interface/setup/position-interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class PositionService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _util: ServiceUtil
  ) {}

  public getPositionList(): Observable<IPosition[]> {
    return this._http
      .get<IPosition[]>(`${API_URL.POSITION_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getPositionById(id: number): Observable<IPosition> {
    return this._http
      .get<IPosition>(`${API_URL.POSITION_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public savePosition(fund: IPosition): Observable<IPosition> {
    return this._http
      .post<IPosition>(`${API_URL.POSITION_SAVE}`, fund, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_POSITION)));
  }

  public deletePosition(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.POSITION_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_POSITION)));
  }
}
