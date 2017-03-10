import { Product } from '../interfaces/product';
import { Seller } from '../interfaces/seller';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

@Injectable()
export class SellersService {
  url = 'http://localhost:5000/api';
  constructor(private http: Http ) { }

  getSellers(): Observable<Seller[]> {
    return this.http.get(this.url + '/sellers')
    .map( response => {
      return <Seller[]> response.json();
    });
  }
  getSellerById(id: number): Observable<Seller> {
    return this.http.get(this.url + `/sellers/${id}`)
    .map( response => {
      return <Seller> response.json();
    });
  }
  getProducts(id: number): Observable<Product[]> {
    return this.http.get(this.url + `/sellers/${id}/products`)
    .map( response => {
      return <Product[]> response.json();
    });
  }
  updateProduct(sellerid: number, product: Product) {
    const url = this.url + `/sellers/${sellerid}/products/${product.id}`;
    return this.http.put(url, product)
      .map((res) => res.json())
        .catch((error: any) => Observable
          .throw(error.json().error || 'Server error'));
  }
}
