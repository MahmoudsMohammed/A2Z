import { Component, Input } from '@angular/core';
import { product } from '../all-products/all-products.component';
@Component({
  selector: 'product',
  templateUrl: './single.product.component.html',
  styleUrl: './single.product.component.scss',
})
export class productComponent {
  @Input() data: product;
}
