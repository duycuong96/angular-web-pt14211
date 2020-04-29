import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ClientRoutingModule } from './client-routing.module';
import { LayoutClientModule } from './layouts/layouts.module';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    LayoutClientModule,
    ClientRoutingModule,

  ],
  declarations: [


]
})

export class ClientModule {}
