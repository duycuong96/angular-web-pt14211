import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';


import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';



@Component({
  selector: 'app-sidebar-shop',
  templateUrl: './sidebar-shop.component.html',
  styleUrls: ['./sidebar-shop.component.scss']
})
export class SidebarShopComponent implements OnInit {

  public model: any;
  productName = [];
  categories: Category[];


  constructor(
    private route: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.productName.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => {
        console.log(data);
        this.categories = data
      }
    )
  }

}
