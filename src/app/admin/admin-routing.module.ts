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
        path: 'banner',
        component: BannerManagerComponent
      },
      {
        path: 'banner/add',
        component: AddBannerManagerComponent
      },
      {
        path: 'banner/edit/:bannerId',
        component: EditBannerManagerComponent
      }

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


