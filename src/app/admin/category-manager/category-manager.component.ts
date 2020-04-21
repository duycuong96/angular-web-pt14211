import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {

  categories: Category[];
  page = 1;
  pageSize = 10;


  constructor(
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

  removeCategory(id){
    this.categoryService.removeCategory(id).subscribe(
      data => {
        console.log(data);
        this.categories =  this.categories.filter(
          category => category.id != data.id
        );
      }
    )
  }
}
