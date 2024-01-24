import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './components/all-products/all-products.component';

@Injectable({ providedIn: 'root' })
export class productService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get<product[]>('https://fakestoreapi.com/products');
  }
  getAllCategories() {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
  getByCategory(cat) {
    return this.http.get<product[]>(
      `https://fakestoreapi.com/products/category/${cat}`
    );
  }
}
