import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Category[];

  constructor(
    private translateService: TranslateService,
    private categoryService: CategoryService
  ) {  translateService.setDefaultLang('vn'); }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => {
        console.log(data);
        this.categories = data
      }
    )
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
