import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPosition } from '../interface/setup/position-interface';
import { API_URL } from '../shared/constant/api.constant';

@Injectable({
  providedIn: "root"
})
export class PositionService {
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

  public positionGetAll(): Observable<IPosition[]> {
    return this.http
      .get<IPosition[]>(`${API_URL.POSITION_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public positionGetById(id: number): Observable<IPosition> {
    return this.http
      .get<IPosition>(`${API_URL.POSITION_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public positionSave(fund: IPosition): Observable<IPosition> {
    return this.http
      .post<IPosition>(`${API_URL.POSITION_SAVE}`, fund, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Save data success", "Position")));
  }

  public positionDeleteById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.POSITION_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(
        map(res => res, this.showToaster("Dalete data success", "Position"))
      );
  }
}
