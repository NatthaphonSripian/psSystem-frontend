import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private readonly _toast: ToastrService) {
    super();
  }

  handleError(handler: { error: any; status: string }) {
    console.log(handler);
    if (handler.error) {
      const error = handler.error;
      const status = error.status;
      const errorMessage = error.message;
      this._toast.error(errorMessage, status, { onActivateTick: true });
    }
  }
}
