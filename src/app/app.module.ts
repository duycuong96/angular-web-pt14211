import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LayoutAdminModule } from './admin/layouts/layouts.module';
import { BannerService } from './services/banner.service';
import { AddBannerManagerComponent } from './admin/banner-manager/add-banner-manager/add-banner-manager.component';
import { BannerManagerComponent } from './admin/banner-manager/banner-manager.component';
import { EditBannerManagerComponent } from './admin/banner-manager/edit-banner-manager/edit-banner-manager.component';
import { PostService } from './services/post.service';
import { PostManagerComponent } from './admin/post-manager/post-manager.component';
import { AddPostManagerComponent } from './admin/post-manager/add-post-manager/add-post-manager.component';
import { EditPostManagerComponent } from './admin/post-manager/edit-post-manager/edit-post-manager.component';
import { CategoryManagerComponent } from './admin/category-manager/category-manager.component';
import { AddCategoryManagerComponent } from './admin/category-manager/add-category-manager/add-category-manager.component';
import { EditCategoryManagerComponent } from './admin/category-manager/edit-category-manager/edit-category-manager.component';
import { CategoryService } from './services/category.service';
import { CommentService } from './services/comment.service';
import { PostDetailClientComponent } from './client/post-detail-client/post-detail-client.component';
import { CommentManagerComponent } from './admin/comment-manager/comment-manager.component';
import { ContactComponent } from './client/contact/contact.component';
import { AboutComponent } from './client/about/about.component';
import { ShopSingleComponent } from './client/shop-single/shop-single.component';
import { PostClientComponent } from './client/post-client/post-client.component';
import { CategoryComponent } from './client/category/category.component';
import { CategoryProductComponent } from './client/category-product/category-product.component';
import { SearchComponent } from './client/search/search.component';


// loader module
export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ShopComponent,
    HomepageComponent,
    DashboardComponent,
    ProductManagerComponent,
    AddProductManagerComponent,
    EditProductManagerComponent,
    BannerManagerComponent,
    AddBannerManagerComponent,
    EditBannerManagerComponent,
    PostManagerComponent,
    AddPostManagerComponent,
    EditPostManagerComponent,
    CategoryManagerComponent,
    AddCategoryManagerComponent,
    EditCategoryManagerComponent,
    CommentManagerComponent,
    PageNotFoundComponent,
  PostDetailClientComponent,
  ContactComponent,
  AboutComponent,
  ShopSingleComponent,
  PostClientComponent,
  CategoryComponent,
  CategoryProductComponent,
  SearchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    LayoutClientModule,
    LayoutAdminModule,
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
  providers: [
    ProductService,
    BannerService,
    PostService,
    CategoryService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
