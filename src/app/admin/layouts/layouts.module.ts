import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { TopbarAdminComponent } from './topbar-admin/topbar-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




const layoutAdmin = [
  SidebarAdminComponent,
  TopbarAdminComponent
]

@NgModule({
  declarations: [
    ...layoutAdmin,

  ],
  imports:[
    RouterModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    ...layoutAdmin
  ]
})

export class LayoutAdminModule {}
