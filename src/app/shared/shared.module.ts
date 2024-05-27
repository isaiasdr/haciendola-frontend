import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LinkComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule,
  ],
  exports: [
    LinkComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }

