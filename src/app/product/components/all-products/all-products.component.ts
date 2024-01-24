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
    this.allProductsData();
    // get all Categories
    this.categriesData();
  }

  // get all products
  allProductsData() {
    this.productServ.getProducts().subscribe(
      (res) => {
        this.products = res;
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  // Get All Categories
  categriesData() {
    this.productServ.getCategories().subscribe(
      (res) => {
        this.categories = res;
        this.categories.unshift('all');
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  // Get Products based on Category
  categoryProducts(cat) {
    this.productServ.getProductsByCategory(cat).subscribe(
      (res) => {
        this.products = res;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  // get products based on category
  onCahnge(e: Event) {
    (e.target as HTMLInputElement).value !== 'all'
      ? this.categoryProducts((e.target as HTMLInputElement).value)
      : this.allProductsData();
  }
}
