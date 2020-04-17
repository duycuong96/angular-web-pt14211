import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';
import { ShopComponent } from './client/shop/shop.component';
import { AddProductManagerComponent } from './admin/product-manager/add-product-manager/add-product-manager.component';
import { EditProductManagerComponent } from './admin/product-manager/edit-product-manager/edit-product-manager.component';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
      },
      {
        path : 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }

    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
