import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import {Product} from '../../../models/product'
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-product-manager',
  templateUrl: './edit-product-manager.component.html',
  styleUrls: ['./edit-product-manager.component.scss']
})
export class EditProductManagerComponent implements OnInit {
  product: Product;

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(
      param => {
        this.productService.getProduct(param.productId).subscribe(
          data => {
            this.product = data;
          }
        )
      }
    )
  }

  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(
      data => {
        this.router.navigateByUrl('/admin/product');
      }
    )
  }

}
