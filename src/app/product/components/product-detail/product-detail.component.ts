import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.interface';
import { productService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productServ: productService,
    private actRot: ActivatedRoute,
    private route: Router
  ) {}
  data: product;
  isLoading = false;
  ngOnInit(): void {
    this.isLoading = true;
    this.productServ
      .getProductById(this.actRot.snapshot.params['id'])
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.data = res;
        },
        (error) => {
          alert(error.message);
          this.isLoading = false;
        }
      );
  }

  // add selected item to LS
  addCart() {
    let allCartProducts = [];
    if (localStorage.getItem('cart')) {
      allCartProducts = JSON.parse(localStorage.getItem('cart'));
      const exist = allCartProducts.find((e) => e.id === this.data.id);
      if (exist) {
        alert('Product You Want to Add Already Exist at the Cart');
      } else {
        this.data.amount = 1;
        allCartProducts.push(this.data);
        localStorage.setItem('cart', JSON.stringify(allCartProducts));
      }
    } else {
      this.data.amount = 1;
      allCartProducts.push(this.data);
      localStorage.setItem('cart', JSON.stringify(allCartProducts));
    }
  }

  // Back To Main Page
  Back() {
    this.route.navigate(['products']);
  }
}
