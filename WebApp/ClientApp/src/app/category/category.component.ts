import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryServices } from '../category.services';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private categoryServices: CategoryServices, private router: ActivatedRoute) { }
  categories: Category[];
  products: Product[];
  
  ngOnInit() {
    this.getCategory();
    //let id = this.router.snapshot.params['id'];
    //this.getProductByCategory(id);
  }

  getCategory() {
    this.categoryServices.getCategory().subscribe(resp => {
      this.categories = resp;
    });
  }

 

}
