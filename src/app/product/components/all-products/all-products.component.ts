import { Component, OnInit } from '@angular/core';
import { productService } from '../../product.service';
import { product } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  constructor(private productServ: productService) {}
  products: product[] = [];
  categories: string[];
  isLoading = false;

  ngOnInit(): void {
    // get all products
    this.allProductsData();
    // get all Categories
    this.categriesData();
  }

  // get all products
  allProductsData() {
    this.isLoading = true;
    this.productServ.getProducts().subscribe(
      (res) => {
        this.products = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        alert(error.message);
      }
    );
  }
  // Get All Categories
  categriesData() {
    this.isLoading = true;
    this.productServ.getCategories().subscribe(
      (res) => {
        this.categories = res;
        this.categories.unshift('all');
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        alert(error.message);
      }
    );
  }
  // Get Products based on Category
  categoryProducts(cat) {
    this.isLoading = true;
    this.productServ.getProductsByCategory(cat).subscribe(
      (res) => {
        this.products = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
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
  // add selected item to LS
  addCart(data: product) {
    let allCartProducts = [];
    if (localStorage.getItem('cart')) {
      allCartProducts = JSON.parse(localStorage.getItem('cart'));
      const exist = allCartProducts.find((e) => e.id === data.id);
      if (exist) {
        alert('Product You Want to Add Already Exist at the Cart');
      } else {
        data.amount = 1;
        allCartProducts.push(data);
        localStorage.setItem('cart', JSON.stringify(allCartProducts));
      }
    } else {
      data.amount = 1;
      allCartProducts.push(data);
      localStorage.setItem('cart', JSON.stringify(allCartProducts));
    }
  }
}
