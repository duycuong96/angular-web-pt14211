import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-category-product',
  templateUrl: './list-category-product.component.html',
  styleUrls: ['./list-category-product.component.scss']
})
export class ListCategoryProductComponent implements OnInit {

  products: Product[];
  categoryId:String = '';

  page = 1;
  pageSize = 9;

  constructor(
    private route : Router,
    private activate: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activate.params.subscribe(data => {
      let {categoryId} = data;
      this.productService.getProductsCategory(categoryId).subscribe(
        data => this.products = data
      );
    })
  }

}
