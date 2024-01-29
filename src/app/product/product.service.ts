import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './models/product.interface';


@Injectable({ providedIn: 'root' })
export class productService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<product[]>(`https://fakestoreapi.com/products`);
  }
  getCategories() {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
  getProductsByCategory(cat: string) {
    return this.http.get<product[]>(
      `https://fakestoreapi.com/products/category/${cat}`
    );
  }
}
