import { Component, OnInit } from '@angular/core';

import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  products: Product[];
  page = 1;
  pageSize = 10;

  constructor(
    private productService: ProductService
  ) {}

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

  removeProduct(id){
    this.productService.removeProduct(id).subscribe(
      data => {
        console.log(data);
        this.products =  this.products.filter(
          product => product.id != data.id
        );
      }
    )
  }

}
