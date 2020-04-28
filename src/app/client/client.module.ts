import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClientRoutingModule } from './client-routing.module';
import { LayoutClientModule } from './layouts/layouts.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { PostClientComponent } from './post-client/post-client.component';
import { PostDetailClientComponent } from './post-detail-client/post-detail-client.component';
import { CategoryComponent } from './category/category.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutClientModule,
    ClientRoutingModule,
    NgbModule
  ],
  declarations: [

  ContactComponent,

  AboutComponent,

  ShopSingleComponent,

  PostClientComponent,

  PostDetailClientComponent,

  CategoryComponent,

  CategoryProductComponent,

  SearchComponent,
]
})

export class ClientModule {}
