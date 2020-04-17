import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import {Product} from '../../../models/product'


@Component({
  selector: 'app-edit-product-manager',
  templateUrl: './edit-product-manager.component.html',
  styleUrls: ['./edit-product-manager.component.scss']
})
export class EditProductManagerComponent implements OnInit {
  product: Product;
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
