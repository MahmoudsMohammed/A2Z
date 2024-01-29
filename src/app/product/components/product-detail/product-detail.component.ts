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
  ngOnInit(): void {
    this.productServ
      .getProductById(this.actRot.snapshot.params['id'])
      .subscribe(
        (res) => {
          this.data = res;
        },
        (error) => [console.log(error)]
      );
  }
  Back() {
    this.route.navigate(['products']);
  }
}
