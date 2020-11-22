import { ConfigService } from './config.service';
import { catchError, retry } from 'rxjs/operators';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';
import { Store } from './../models/Store';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private backendUrl: string;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    private configService: ConfigService
    ) {
      this.handleError = httpErrorHandler.createHandleError('StoreService');
      this.backendUrl = configService.BackendUrl;
    }

  getStoreInfo(): Observable<Store> {
    return this.http.get<Store>(this.backendUrl)
      .pipe(
        retry(1),
        catchError(this.handleError('getProducts', {} as Store))
      );
  }
}
