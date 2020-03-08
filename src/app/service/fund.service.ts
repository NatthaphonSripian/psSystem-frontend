import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IFund } from '../interface/setup/fund-interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class FundService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _util: ServiceUtil
  ) {}

  public getFundList(): Observable<IFund[]> {
    return this._http
      .get<IFund[]>(`${API_URL.FUND_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getFundById(id: number): Observable<IFund> {
    return this._http
      .get<IFund>(`${API_URL.FUND_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public saveFund(fund: IFund): Observable<IFund> {
    return this._http
      .post<IFund>(`${API_URL.FUND_SAVE}`, fund, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_FUND)));
  }

  public deleteFund(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.FUND_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(false, res, TEXT.TITLE_FUND)));
  }
}
