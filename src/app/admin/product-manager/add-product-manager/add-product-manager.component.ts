import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

import {Category} from '../../../models/category';
import {CategoryService} from '../../../services/category.service'

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-product-manager',
  templateUrl: './add-product-manager.component.html',
  styleUrls: ['./add-product-manager.component.scss']
})
export class AddProductManagerComponent implements OnInit {
  product: Product = new Product();
  categories: Category[];

  form = new FormGroup({
    'id': new FormControl(null),
    'categoryId': new FormControl('', [
      Validators.required,
    ]),
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    'price': new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')
    ]),
    'image': new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]),
    'desc': new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  })

get name() { return this.form.get('name'); }
get image() { return this.form.get('image'); }
get price() { return this.form.get('price'); }
get desc() { return this.form.get('desc'); }
get categoryId() { return this.form.get('categoryId'); }

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      data => this.router.navigateByUrl('admin/product')
    );
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => {
        console.log(data);
        this.categories = data
      }
    )
  }

}
