import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API_URL } from '../shared/constant/api.constant';
import { Organization } from './../interface/organization/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
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

  public orgGetAll(): Observable<Organization[]> {
    return this.http
      .get<Organization[]>(`${API_URL.ORGANIZATION_GET_ALL}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public orgGetById(id: number): Observable<Organization> {
    return this.http
      .get<Organization>(`${API_URL.ORGANIZATION_GET_BY_ID}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res));
  }

  public orgSave(organization: Organization): Observable<Organization> {
    return this.http
      .post<Organization>(`${API_URL.ORGANIZATION_SAVE}`, organization, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Save data success", "Organization")));
  }

  public orgDeleteById(id: number): Observable<any> {
    return this.http
      .delete(`${API_URL.ORGANIZATION_DELETE}${id}`, {
        headers: this.getHeaders()
      })
      .pipe(map(res => res, this.showToaster("Dalete data success", "Organization")));
  }
}
