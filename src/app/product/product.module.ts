import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { productRoutingModule } from './product.routing.module';

@NgModule({
  declarations: [AllProductsComponent, ProductDetailComponent],
  imports: [CommonModule, productRoutingModule],
})
export class ProductModule {}
