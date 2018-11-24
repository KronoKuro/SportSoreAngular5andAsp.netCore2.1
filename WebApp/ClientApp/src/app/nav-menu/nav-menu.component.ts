import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryServices } from '../category.services';



@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(private categoryServices: CategoryServices) { }
  categories: Category[];

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryServices.getCategory().subscribe(resp => {
      this.categories = resp;
    });
  }

 

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
