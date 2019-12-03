import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Fund } from './../interface/setup/fund';
import { API_URL } from './../shared/constant/api.constant';

@Injectable({
  providedIn: "root"
})
export class FundService {
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

  public fundGetAll(): Observable<Fund[]> {
    return this.http
      .get<Fund[]>(`${API_URL.FUND_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public fundGetById(id: number): Observable<Fund> {
    return this.http
      .get<Fund>(`${API_URL.FUND_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public fundSave(fund: Fund): Observable<Fund> {
    return this.http
      .post<Fund>(`${API_URL.FUND_SAVE}`, fund, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Save data success", "Fund")));
  }

  public fundDeleteById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.FUND_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Dalete data success", "Fund")));
  }
}
