import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule }       from './admin-routing.module';
import { LayoutAdminModule } from './layouts/layouts.module';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutAdminModule,
    NgbModule

  ],
  declarations: []

})
export class AdminModule {}


