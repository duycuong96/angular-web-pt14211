import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private translateService: TranslateService
  ) { translateService.setDefaultLang('vn'); }

  ngOnInit(): void {
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

}
