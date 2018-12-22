import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Repository } from '../models/repository.model';
import { ProductServices } from '../product.services';
import { Category } from '../models/category.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private productServices: ProductServices, private http: HttpClient,
    private route: ActivatedRoute
    ) { }
  products: Product[];
    id: number;

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getByCategoryProduct(routeParams.id);
    });
  }

  getByCategoryProduct(id: string) {
    return this.productServices.getProductByCategory(id).subscribe(resp => {
      this.products = resp;
    });
  }
}
