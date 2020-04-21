import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../models/category'
import { CategoryService } from '../../../services/category.service'

@Component({
  selector: 'app-edit-category-manager',
  templateUrl: './edit-category-manager.component.html',
  styleUrls: ['./edit-category-manager.component.scss']
})
export class EditCategoryManagerComponent implements OnInit {
  category: Category;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.route.params.subscribe(
      param => {
        this.categoryService.getCategory(param.categoryId).subscribe(
          data => {
            this.category = data;
          }
        )
      }
    )
  }

  updateCategory(){
    this.categoryService.updateCategory(this.category).subscribe(
      data => {
        this.router.navigateByUrl('/admin/category');
      }
    )
  }

}
