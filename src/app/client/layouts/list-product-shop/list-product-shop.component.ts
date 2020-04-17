import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-product-shop',
  templateUrl: './list-product-shop.component.html',
  styleUrls: ['./list-product-shop.component.scss']
})
export class ListProductShopComponent implements OnInit {
  products: Product[]
  page = 1;
  pageSize = 9;
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
