import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AddProductManagerComponent } from './product-manager/add-product-manager/add-product-manager.component';
import { EditProductManagerComponent } from './product-manager/edit-product-manager/edit-product-manager.component';
import { BannerManagerComponent } from './banner-manager/banner-manager.component';
import { AddBannerManagerComponent } from './banner-manager/add-banner-manager/add-banner-manager.component';
import { EditBannerManagerComponent } from './banner-manager/edit-banner-manager/edit-banner-manager.component';
import { PostManagerComponent } from './post-manager/post-manager.component';
import { AddPostManagerComponent } from './post-manager/add-post-manager/add-post-manager.component';
import { EditPostManagerComponent } from './post-manager/edit-post-manager/edit-post-manager.component';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import { AddCategoryManagerComponent } from './category-manager/add-category-manager/add-category-manager.component';
import { EditCategoryManagerComponent } from './category-manager/edit-category-manager/edit-category-manager.component';



const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product',
        component: ProductManagerComponent
      },
      {
        path: 'product/add',
        component: AddProductManagerComponent
      },
      {
        path: 'product/edit/:productId',
        component: EditProductManagerComponent
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            component: CategoryManagerComponent
          },
          {
            path: 'add',
            component: AddCategoryManagerComponent
          },
          {
            path: 'edit/:categoryId',
            component: EditCategoryManagerComponent
          }
        ]
      },
      {
        path: 'banner',
        children: [
          {
            path: '',
            component: BannerManagerComponent
          },
          {
            path: 'add',
            component: AddBannerManagerComponent
          },
          {
            path: 'edit/:bannerId',
            component: EditBannerManagerComponent
          }
        ]
      },
      {
        path: 'post',
        children: [
          {
            path: '',
            component: PostManagerComponent
          },
          {
            path: 'add',
            component: AddPostManagerComponent
          },
          {
            path: 'edit/:postId',
            component: EditPostManagerComponent
          }
        ]
      },



    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}


