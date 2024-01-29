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
          console.log(error);
          this.isLoading = false;
        }
      );
  }
  Back() {
    this.route.navigate(['products']);
  }
}
