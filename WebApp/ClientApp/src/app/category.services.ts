import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category.model';
import { Product } from './models/product.model';



@Injectable()
export class CategoryServices {

  constructor(private http: HttpClient) { }

  private url: string = 'api/home/category';

  getCategory() {
    debugger;
    return this.http.get<Category[]>(this.url);
  }

  getProductByCategory(id: string) {
    return this.http.get<Product[]>("api/home/category" + '/' + id);
  }
}
