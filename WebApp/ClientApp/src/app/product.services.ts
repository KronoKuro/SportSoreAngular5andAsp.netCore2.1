import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';



@Injectable()
export class ProductServices {

  constructor(private http: HttpClient) { }

  private url: string = 'api/home';

  getProduct() {
    return this.http.get(this.url);
  }

  getProductById(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  getProductByCategory(id: string) {
    return this.http.get<Product[]>(this.url + '/' + 'byCategory/' + id);
  }
}
