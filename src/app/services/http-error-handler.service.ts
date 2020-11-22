import { ToastrService } from 'ngx-toastr';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';


export type HandleError = <T>(operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private toastr: ToastrService
  ) { }

  createHandleError = (serviceName = '') => {
    return <T>(operation = 'operation', result = {} as T) =>
      this.handleError(serviceName, operation, result);

  }


  handleError<T>(serviceName = '', operation = 'operation', result = {} as T){
    return (error: HttpErrorResponse): Observable<T> => {
      //TODO send the error to log

      const message = (error.error instanceof ErrorEvent) ? error.error.message : `server returned code ${error.status} with body "${error.error}"`;

      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      this.toastr.error('An error occurred while fetch data', 'Error fetch data')

      return of( result );
    }
  }

}
