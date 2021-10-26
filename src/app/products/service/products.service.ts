import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = '../../../assets/products.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Product[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(products => console.log(products))
    );
  }
}
