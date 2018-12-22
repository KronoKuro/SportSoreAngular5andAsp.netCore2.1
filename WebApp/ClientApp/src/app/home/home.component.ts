import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Repository } from '../models/repository.model';
import { ProductServices } from '../product.services';
import { Category } from '../models/category.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  constructor(private productServices: ProductServices, private http: HttpClient) {
    }
  products: Product;
  category: Category;

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    return this.productServices.getProduct().subscribe(resp => {
      this.products = resp;
    });
  }
}
