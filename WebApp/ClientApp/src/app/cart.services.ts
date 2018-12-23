import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class CartServices {

  selections: Cart[] = [];
  itemCount = 0;
  itemPrice = 0;

  constructor(private http: HttpClient) { }
  private url = 'api/cart';

  getCartItems(): Observable<any> {
    return this.http.get<any[]>(this.url);
  }

  addProductToCart(cart: any) {
    const selection = this.selections
    .find(ps => ps.id === cart.id);
    if (selection) {
      selection.quantity++;
    } else {
      this.selections.push(new Cart(cart,
        cart.id, cart.name, 1));
    }
    this.update();
  }

  updateQuntity(id: string, quantity: number) {
    if (quantity > 0) {
      const selection = this.selections.find(
          ps => ps.id === id);
        } else {
          const index = this.selections.findIndex(ps => ps.id === id);
          if (index !== -1) {
            this.selections.splice(index, 1);
          }
          this.update();
        }
    }

  update() {
    this.itemCount = this.selections.map(
      ps => ps.quantityValue
    ).reduce((prev, curr) => prev + curr, 0);
  }

  clear() {
    this.selections = [];
    this.update();
  }
}

export class Cart {
  constructor(public cart: CartServices,
    public id?: string,
    public name?: string,
    public quantityValue?: number,
    public categoryName?: string,
    public categoryId?: string,
    public description?: string,
  ) {}

  get quantity() {
    return this.quantity;
  }

  set quantity(newQuantity: number) {
    this.quantityValue = newQuantity;
    this.cart.update();
  }


  }
