import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  constructor(
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang('vn');
  }

  ngOnInit(): void {
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

}
