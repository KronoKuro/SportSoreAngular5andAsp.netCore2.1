import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { CartServices } from '../cart.services';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  constructor(private cartServices: CartServices, private http: HttpClient) {
    }
  products: Product[];
  ngOnInit() {
    this.getCart();
  }

  getCart() {
    return this.cartServices.getCartItems().subscribe(resp => {
      this.products = resp;
    });
  }
}
