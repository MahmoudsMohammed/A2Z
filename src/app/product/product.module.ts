import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
