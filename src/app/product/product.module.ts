import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { productService } from './product.service';

@NgModule({
  declarations: [AllProductsComponent, ProductDetailComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [productService],
})
export class ProductModule {}
