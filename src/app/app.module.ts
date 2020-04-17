import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './client/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { ShopComponent } from './client/shop/shop.component';

import {ProductService} from './services/product.service';

import { LayoutClientModule } from './client/layouts/layouts.module';
import { AddProductManagerComponent } from './admin/product-manager/add-product-manager/add-product-manager.component';
import { EditProductManagerComponent } from './admin/product-manager/edit-product-manager/edit-product-manager.component';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    ProductManagerComponent,
    ShopComponent,
    AddProductManagerComponent,
    EditProductManagerComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    LayoutClientModule,
    AppRoutingModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
