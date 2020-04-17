import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FooterFeComponent } from './footer-fe/footer-fe.component'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewProductsHomeComponent } from './new-products-home/new-products-home.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarShopComponent } from './sidebar-shop/sidebar-shop.component';
import { ListProductShopComponent } from './list-product-shop/list-product-shop.component';



const layoutClient = [
  FooterFeComponent,
  HeaderComponent,
  NewProductsHomeComponent,
  FooterComponent,
  SidebarShopComponent,
  ListProductShopComponent,
]

@NgModule({
  declarations: [
    ...layoutClient,


  ],
  imports:[
    RouterModule,
    CommonModule,
    NgbModule
  ],
  exports: [
   ...layoutClient
  ]
})

export class LayoutClientModule {}
