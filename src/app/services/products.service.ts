import { ConfigService } from './config.service';
import { HttpErrorHandlerService, HandleError } from './http-error-handler.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //private backendUrl = 'http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR';
  private backendUrl: string;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    configService: ConfigService
  ) {
    this.handleError = httpErrorHandler.createHandleError('ProductService');
    this.backendUrl = configService.BackendUrl;
  }

  getProducts(page, elements) {
    const httpParams = new HttpParams()
      .set('page', page)
      .set('elements', elements);

    const options = {
      params: httpParams
    };
    return this.http.get(this.backendUrl + '/products', options)
      .pipe(
        catchError(this.handleError('getProducts', []))
      );

  }

  getProduct(idProduct){
    return this.http.get(this.backendUrl + '/products/' + idProduct)
      .pipe(
        catchError(this.handleError('getProduct',[]))
      );
  }

  addProduct(product: Product) {
    return this.http.post(this.backendUrl + '/products', product, { responseType: 'text' })
      .pipe(
        catchError(this.handleError('addProduct', product))
      );
  }

  delProduct(id: string): Observable<{}> {
    return this.http.delete(this.backendUrl + `/products/${id}`)
      .pipe(
        catchError(this.handleError('delProduct', {}))
      );
  }

}
