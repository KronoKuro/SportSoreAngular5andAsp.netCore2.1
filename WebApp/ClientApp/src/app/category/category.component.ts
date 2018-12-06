import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryServices } from '../category.services';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductServices } from '../product.services';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private categoryServices: CategoryServices, private productServices: ProductServices, private router: ActivatedRoute) { }
  categories: Category[];
  products: Product[];
  
  ngOnInit() {
    debugger;
    //this.getCategory();
    //let id = this.router.snapshot.params['id'];
    //this.getProductByCategory(id);
    debugger;
    let id = this.router.snapshot.params['id'];
    if (id != null) {
      this.getProductByCategory(id);
    } else {
      this.getProduct();
    }
  }

  /*getCategory() {
    this.categoryServices.getCategory().subscribe(resp => {
      this.categories = resp;
    });
  }*/


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
