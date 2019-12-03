import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Bank } from '../interface/setup/bank';
import { API_URL } from '../shared/constant/api.constant';

@Injectable({
  providedIn: "root"
})
export class BankService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  showToaster(msg: string, title: string) {
    this.toastr.success(msg, title);
  }

  getHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json");
    return headers;
  }

  public bankGetAll(): Observable<Bank[]> {
    return this.http
      .get<Bank[]>(`${API_URL.BANK_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public bankGetById(id: number): Observable<Bank> {
    return this.http
      .get<Bank>(`${API_URL.BANK_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public bankSave(bank: Bank): Observable<Bank> {
    return this.http
      .post<Bank>(`${API_URL.BANK_SAVE}`, bank, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Save data success", "Bank")));
  }

  public bankDeleteById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.BANK_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Dalete data success", "Bank")));
  }
}
