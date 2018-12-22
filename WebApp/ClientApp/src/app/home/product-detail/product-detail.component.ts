import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { ProductServices } from '../../product.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private productServices: ProductServices, private http: HttpClient,
    private route: ActivatedRoute ) {
    }
    product: Product;

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getProductById(routeParams.id);
    });
  }

  getProductById(id: string) {
    return this.productServices.getProductById(id).subscribe(resp => {
      this.product = resp;
    });
  }
}
