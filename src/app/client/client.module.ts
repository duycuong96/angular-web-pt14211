import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LayoutClientModule } from './layouts/layouts.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutClientModule,
    ClientRoutingModule,

  ],
  declarations: [

  ContactComponent,

  AboutComponent,

  ShopSingleComponent]
})

export class ClientModule {}
