import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Category } from "../models/category";
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

  categoriesApi = 'https://5e9a8b2ebc561b0016af3e46.mockapi.io/product';

  constructor(
    private http: HttpClient
  ){}

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoriesApi);
  }

  // getCategory(id): Observable<Category>{
  //   return this.http.get<Category>(`${this.categoriesApi}/${id}`);
  // }

  // removeCategory(id): Observable<Category>{
  //   return this.http.delete<Category>(`${this.categoriesApi}/${id}`);
  // }

  // addCategory(product): Observable<Category>{
  //   return this.http.post<Category>(`${this.categoriesApi}`, product);
  // }

  // updateCategory(product): Observable<Category>{
  //   return this.http.put<Category>(`${this.categoriesApi}/${product.id}`, product)
  // }



}
