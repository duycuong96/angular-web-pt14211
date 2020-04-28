import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { PostClientComponent } from './post-client/post-client.component';
import { PostDetailClientComponent } from './post-detail-client/post-detail-client.component';
import { CategoryComponent } from './category/category.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { SearchComponent } from './search/search.component';

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
        children: [
          {
            path: '',
            component: ShopComponent
          },
          {
            path: ':productId',
            component: ShopSingleComponent
          }
        ]
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            component: CategoryComponent
          },
          {
            path: ':categoryId',
            component: CategoryProductComponent
          },
        ]
      },

      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'new',
        children: [
          {
            path: '',
            component: PostClientComponent
          },
          {
            path: ':postId',
            component: PostDetailClientComponent
          }
        ]
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
