import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StatsCategoriesData } from './../models/StatsCategoriesData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private backendUrl: string;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    configService: ConfigService
  ) {
    this.handleError = httpErrorHandler.createHandleError('CategoriesService');
    this.backendUrl = configService.BackendUrl;
  }

  public getCategoriesData(): Observable<StatsCategoriesData[]>{
    return this.http.get<StatsCategoriesData[]>(this.backendUrl + '/stats/categories')
      .pipe(
        catchError(this.handleError('getCategoriesData()', []))
      );
  }
}
