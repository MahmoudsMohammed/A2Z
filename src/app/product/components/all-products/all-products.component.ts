import { Component, OnInit } from '@angular/core';
import { productService } from '../../product.service';

// decripe the response data
export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  constructor(private productServ: productService) {}
  products: product[] = [];
  categories: string[];
  ngOnInit(): void {
    // get all products
    this.productServ.getAllProducts().subscribe((res) => {
      this.products = res;
    });
    // get all Categories
    this.productServ.getAllCategories().subscribe((res) => {
      this.categories = res;
      this.categories.unshift('All');
    });
  }

  onCahnge(input: HTMLInputElement) {
    if (input.value !== 'All') {
      this.productServ.getByCategory(input.value).subscribe((res) => {
        this.products = res;
      });
    } else {
      this.productServ.getAllProducts().subscribe((res) => {
        this.products = res;
      });
    }
  }
}
