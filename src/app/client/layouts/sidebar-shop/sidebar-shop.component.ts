import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service'

@Component({
  selector: 'app-sidebar-shop',
  templateUrl: './sidebar-shop.component.html',
  styleUrls: ['./sidebar-shop.component.scss']
})
export class SidebarShopComponent implements OnInit {

  categories: Category[];

  constructor(
    private route: Router,
    private categoryService: CategoryService
  ) { }

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

}
