import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AdminRoutingModule }       from './admin-routing.module';
import { LayoutAdminModule } from './layouts/layouts.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    LayoutAdminModule,
    NgbModule

  ],
  declarations: []

})
export class AdminModule {}


