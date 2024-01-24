import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllProductsComponent, ProductDetailComponent],
  imports: [CommonModule, SharedModule],
})
export class ProductModule {}
