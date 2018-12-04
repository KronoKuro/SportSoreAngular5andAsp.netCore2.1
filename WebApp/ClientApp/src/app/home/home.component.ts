import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Repository } from '../models/repository.model';
import { ProductServices } from '../product.services';
import { Category } from '../models/category.model';
import { ActivatedRoute } from '@angular/router';
import { CategoryServices } from '../category.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private productServices: ProductServices, private http: HttpClient,
    private router: ActivatedRoute, private categoryServices: CategoryServices) {
    }
  products: Product[];
  category: Category;

  ngOnInit() {
    debugger;
    let id = this.router.snapshot.params['id'];
    if (id != null) {
      this.getProductByCategory(id);
    } else {
      this.getProduct();
    }
  }

  getProduct() {
    return this.productServices.getProduct().subscribe(resp => {
      debugger;
      this.products = resp;
    });
  }

  getProductByCategory(id: string) {
    this.categoryServices.getProductByCategory(id).subscribe(resp => {
      this.products = resp;
    });
  }
}
