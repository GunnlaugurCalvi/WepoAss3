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

  addProduct(sellerid: number, product: Product) {
    const url = this.url + `/sellers/${sellerid}/products/`;
    const body = {
      name: product.name,
      price: product.price,
      imagePath: product.imagePath
    };
    return this.http.put(url, body)
    .map((res) => {
      return <Product> res.json();
    });
  }
  updateProduct(sellerid: number, product: Product) {
    const url = this.url + `/sellers/${sellerid}/products/${product.id}`;
    const body = {
      name: product.name,
      price: product.price,
      imagePath: product.imagePath
    };
    return this.http.put(url, body)
    .map((res) => {
      return <Product> res.json();
    });
  }
  addSeller(seller: Seller) {
    const url = this.url + `/sellers/`;
    const body = {
      name: seller.name,
      category: seller.category,
      imagePath: seller.imagePath
    };
    return this.http.put(url, body)
    .map((res) => {
      return <Seller> res.json();
    });
  }
  updateSeller(seller: Seller) {
    const url = this.url + `/sellers/${seller.id}`;
    const body = {
      name: seller.name,
      category: seller.category,
      imagePath: seller.imagePath
    };
    return this.http.put(url, body)
    .map((res) => {
      return <Seller> res.json();
    });
  }
}
