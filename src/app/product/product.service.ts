import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class productService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }
}
