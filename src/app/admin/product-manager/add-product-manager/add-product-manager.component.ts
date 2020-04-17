import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-manager',
  templateUrl: './add-product-manager.component.html',
  styleUrls: ['./add-product-manager.component.scss']
})
export class AddProductManagerComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      data => this.router.navigateByUrl('admin/product')
    );
  }

}
