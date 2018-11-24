import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category.model';



@Injectable()
export class CategoryServices {

  constructor(private http: HttpClient) { }

  private url: string = 'api/category';

  getCategory() {
    debugger;
    return this.http.get<Category[]>(this.url);
  }
}
