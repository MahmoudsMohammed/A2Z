import { Component, OnInit } from '@angular/core';
import { productService } from '../../product.service';
interface product {
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
  ngOnInit(): void {
    this.productServ.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
