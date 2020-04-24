import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-manager',
  templateUrl: './add-product-manager.component.html',
  styleUrls: ['./add-product-manager.component.scss']
})
export class AddProductManagerComponent implements OnInit {
  product: Product = new Product();

  form = new FormGroup({
    'id': new FormControl(null),
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
    ]),
    'status': new FormControl('', [
      Validators.required,
    ]),
  })

get name() { return this.form.get('name'); }
get image() { return this.form.get('image'); }
get price() { return this.form.get('price'); }
get desc() { return this.form.get('desc'); }
get status() { return this.form.get('status'); }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      data => this.router.navigateByUrl('admin/product')
    );
  }

}
