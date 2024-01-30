import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { product } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  constructor(private render: Renderer2) {}
  @ViewChild('order', { static: true }) order: ElementRef;
  products: product[];
  total: number;
  negative = false;

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.products = JSON.parse(localStorage.getItem('cart'));
      this.calcTotal();
    }
  }

  // at cahnge on amount
  onChange(e: Event, index: number) {
    if (+(e.target as HTMLInputElement).value <= 0) {
      (e.target as HTMLInputElement).value = '1';
      this.products[index].amount = 1;
      localStorage.setItem('cart', JSON.stringify(this.products));
      this.calcTotal();
      this.negative = true;
    } else {
      this.products[index].amount = +(e.target as HTMLInputElement).value;
      localStorage.setItem('cart', JSON.stringify(this.products));
      this.calcTotal();
      this.negative = false;
    }
  }

  // calculate the total
  calcTotal() {
    this.total = 0;
    this.products.forEach((prod) => {
      this.total += +(+prod.amount * +prod.price);
    });
    this.total = +this.total.toFixed(2);
  }

  // Delete Product
  onDelete(index: number) {
    this.products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.calcTotal();
  }
}
