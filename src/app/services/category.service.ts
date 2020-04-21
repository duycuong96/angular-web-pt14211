import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Category } from "../models/category";
import { Observable } from 'rxjs';

@Injectable()

export class CategoryService {

  categoriesApi = 'https://5e9a8b2ebc561b0016af3e46.mockapi.io/categories';

  constructor(
    private http: HttpClient
  ){}

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoriesApi);
  }

  getCategory(id): Observable<Category>{
    return this.http.get<Category>(`${this.categoriesApi}/${id}`);
  }

  removeCategory(id): Observable<Category>{
    return this.http.delete<Category>(`${this.categoriesApi}/${id}`);
  }

  addCategory(category): Observable<Category>{
    return this.http.post<Category>(`${this.categoriesApi}`, category);
  }

  updateCategory(category): Observable<Category>{
    return this.http.put<Category>(`${this.categoriesApi}/${category.id}`, category)
  }



}
