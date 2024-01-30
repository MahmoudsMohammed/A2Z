import {
  Component,
  OnInit,
} from '@angular/core';
import { product } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  products: product[];
  total: number;
  negative = false;
  orderCart = false;

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
      setTimeout(() => {
        this.negative = false;
      }, 2000);
    } else {
      this.products[index].amount = +(e.target as HTMLInputElement).value;
      localStorage.setItem('cart', JSON.stringify(this.products));
      this.calcTotal();
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

  // Make Order
  onOrder() {
    if (this.products.length !== 0) {
      this.orderCart = true;
      setTimeout(() => {
        this.orderCart = false;
      }, 2000);
      this.products = [];
      localStorage.setItem('cart', JSON.stringify(this.products));
      this.calcTotal();
    }
  }
}
