import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ListProductsResponse, Meta, Product } from '../interfaces';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  public page: number = 1;
  public readonly limit: number = 12;
  public products: Product[] = [];
  public metadata?: Meta;

  constructor() {}

  public getProducts(page: number = 1): Observable<ListProductsResponse> {
    this.page = page;
    const token = localStorage.getItem('token');
    return this.http.get<ListProductsResponse>(`${this.baseUrl}/products?limit=${this.limit}&page=${page}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .pipe(
        tap(({ data, meta }) => {
          this.products = data;
          this.metadata = meta;
        }),
        catchError( err => throwError( () => err.error.message ))
      )
  }

  public createProduct(product: Product) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/products`, product, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .pipe(
      switchMap(() => this.getProducts(this.page)),
      catchError( err => throwError( () => err.error.message ))
    )

  }

  public updateProduct(product: Product) {
    const token = localStorage.getItem('token');
    return this.http.patch(`${this.baseUrl}/products/${product.sku}`, product, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .pipe(
      switchMap(() => this.getProducts(this.page)),
      catchError( err => throwError( () => err.error.message ))
    )
  }

  public deleteProduct(sku: string) {
    const token = localStorage.getItem('token');
    return this.http.delete(`${this.baseUrl}/products/${sku}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .pipe(
      switchMap(() => this.getProducts(this.page)),
      catchError( err => throwError( () => err.error.message ))
    )
  }
}
