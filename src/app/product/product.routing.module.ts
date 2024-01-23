import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const roots: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(roots)],
  exports: [RouterModule],
})
export class productRoutingModule {}
