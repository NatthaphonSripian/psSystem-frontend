import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { TEXT } from '../constant/common.constant';

@Injectable({
  providedIn: "root"
})
export class ServiceUtil {
  constructor(private readonly _toast: ToastrService) {}

  getHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json");
    return headers;
  }

  isSuccess(isSave: boolean, response: any, title: string) {
    const message = isSave ? TEXT.SAVE_SUCCESS : TEXT.DELETE_SUCCESS;
    if (response) {
      this._toast.success(message, title);
      return response;
    }
  }
}
