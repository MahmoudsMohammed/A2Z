import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  data:product;
  ngOnInit(): void {
    
  }
}
