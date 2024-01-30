import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { productComponent } from './components/single-product/single.product.component';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailComponent,
    productComponent,
  ],
  imports: [SharedModule, CommonModule],
})
export class ProductModule {}
