import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormProductComponent } from './components/form-product/form-product.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsTableComponent,
    ToolbarComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class DashboardModule { }
