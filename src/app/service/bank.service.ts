import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBank } from '../interface/setup/bank-interface';
import { API_URL } from '../shared/constant/api.constant';
import { TEXT } from '../shared/constant/common.constant';
import { ServiceUtil } from '../shared/utils/service-utils';

@Injectable({
  providedIn: "root"
})
export class BankService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _util: ServiceUtil
  ) {}

  public getBankList(): Observable<IBank[]> {
    return this._http
      .get<IBank[]>(`${API_URL.BANK_GET_ALL}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public getBankById(id: number): Observable<IBank> {
    return this._http
      .get<IBank>(`${API_URL.BANK_GET_BY_ID}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => res));
  }

  public saveBank(bank: IBank): Observable<IBank> {
    return this._http
      .post<IBank>(`${API_URL.BANK_SAVE}`, bank, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_BANK)));
  }

  public deleteBank(id: number): Observable<any> {
    return this._http
      .delete(`${API_URL.BANK_DELETE}${id}`, {
        headers: this._util.getHeader()
      })
      .pipe(map(res => this._util.isSuccess(true, res, TEXT.TITLE_BANK)));
  }
}
