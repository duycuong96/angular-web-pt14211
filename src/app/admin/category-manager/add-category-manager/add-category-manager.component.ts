import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Category} from '../../../models/category';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-add-category-manager',
  templateUrl: './add-category-manager.component.html',
  styleUrls: ['./add-category-manager.component.scss']
})
export class AddCategoryManagerComponent implements OnInit {

  category: Category = new Category();
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.categoryService.addCategory(this.category).subscribe(
      data => this.router.navigateByUrl('admin/category')
    )
  }

}
