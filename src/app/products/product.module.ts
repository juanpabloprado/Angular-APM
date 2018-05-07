import { NgModule } from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {RouterModule} from '@angular/router';
import {ProductGuard} from './product.guard';
import {ProductService} from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate: [ProductGuard], component: ProductDetailComponent},
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [ProductService, ProductGuard]
})
export class ProductModule { }
