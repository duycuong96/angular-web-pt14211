import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FooterFeComponent } from './footer-fe/footer-fe.component'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderFeComponent } from './header-fe/header-fe.component';
import { NewProductsHomeComponent } from './new-products-home/new-products-home.component';
import { FooterComponent } from './footer/footer.component';



const layoutClient = [
  FooterFeComponent,
  HeaderComponent,
  NewProductsHomeComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...layoutClient,

  ],
  imports:[
    RouterModule,
    CommonModule
  ],
  exports: [
   ...layoutClient
  ]
})

export class LayoutClientModule {}
