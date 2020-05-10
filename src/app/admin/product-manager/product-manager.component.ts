import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import {Product} from '../../models/product';
import {Category} from '../../models/category';
import {ProductService} from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  products: Product[];
  categories: Category[];
  name: String;

  page = 1;
  pageSize = 10;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.productService.getProducts().subscribe(
      data => {
        this.products = data
      }
    );
  }

  Search(){
    if(this.name != ""){
      this.products = this.products.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    } else if(this.name == ""){
      this.getProducts();
    }
  }

  removeProduct(id){

    this.products = this.products.filter(product => product.id != id)
    this.productService.removeProduct(id).subscribe(() => this.router.navigateByUrl('/admin/product'));
  }

}
