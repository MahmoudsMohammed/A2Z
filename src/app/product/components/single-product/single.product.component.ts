import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../../models/product.interface';

@Component({
  selector: 'product',
  templateUrl: './single.product.component.html',
  styleUrl: './single.product.component.scss',
})
export class productComponent {
  @Input() data: product;
  @Output() selected = new EventEmitter<product>();
  onAddToCart() {
    this.selected.emit(this.data);
  }
}
