import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-new-products-home',
  templateUrl: './new-products-home.component.html',
  styleUrls: ['./new-products-home.component.scss']
})
export class NewProductsHomeComponent implements OnInit {

  products: Product[]
  page = 1;
  pageSize = 12;

  constructor(
    private productService: ProductService
  ) { }


  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.productService.getProducts().subscribe(
      data => {
        console.log(data);
        this.products = data
      }
    )
  }

}
