import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {ProductService} from './services/product.service';

import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductManagerComponent } from './admin/product-manager/add-product-manager/add-product-manager.component';
import { EditProductManagerComponent } from './admin/product-manager/edit-product-manager/edit-product-manager.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';



import { ShopComponent } from './client/shop/shop.component';
import { LayoutClientModule } from './client/layouts/layouts.module';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';
import { HomeComponent } from './client/home/home.component';
import { HomepageComponent } from './client/homepage/homepage.component';

import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

// import { AdminModule } from './admin/admin.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from  '@angular/common/http';

// loader module
export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
    HomepageComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    LayoutClientModule,
    AppRoutingModule,
    AdminModule,
    ClientModule,
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  exports: [TranslateModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
