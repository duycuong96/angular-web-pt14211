import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';

const clientRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children : [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomepageComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'shop/:productId',
        component: ShopSingleComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]

  },



];

@NgModule({
  imports: [
    RouterModule.forChild(clientRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class ClientRoutingModule {}
