import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




const layoutAdmin = [

]

@NgModule({
  declarations: [
    ...layoutAdmin
  ],
  imports:[
    RouterModule,
    CommonModule
  ],
  exports: [
    ...layoutAdmin
  ]
})

export class LayoutAdminModule {}
