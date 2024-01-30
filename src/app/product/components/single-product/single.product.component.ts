import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../../../shared/models/product.interface';
import { productService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './single.product.component.html',
  styleUrl: './single.product.component.scss',
})
export class productComponent {
  constructor(private router: Router) {}

  @Input() data: product;
  @Output() selected = new EventEmitter<product>();
  onAddToCart() {
    this.selected.emit(this.data);
  }

  // sent product data to product details page
  showDetails() {
    this.router.navigate([`product/${this.data.id}`]);
  }
}
