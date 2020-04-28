import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Product } from "../models/product";
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

  productsApi = 'https://angular-pt14211-cuongvdph06938.herokuapp.com/products';

  constructor(
    private http: HttpClient
  ){}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsApi);
  }

  getProductsCategory(categoryId: number): Observable<Product[]>{
    let  url = `${this.productsApi}/?categoryId=${categoryId}`;
    return this.http.get<Product[]>(url);
  }

  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.productsApi}/${id}`);
  }

  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.productsApi}/${id}`);
  }

  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.productsApi}`, product);
  }

  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.productsApi}/${product.id}`, product)
  }



}
