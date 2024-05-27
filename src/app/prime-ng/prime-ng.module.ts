import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';


@NgModule({
  exports: [
    ButtonModule,
    ProgressSpinnerModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    FloatLabelModule,
    MenubarModule,
    AvatarModule,
    ToastModule,
    MenuModule,
    PaginatorModule,
    SkeletonModule,
    TableModule,
    ToolbarModule,
    InputGroupModule,
    InputGroupAddonModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextareaModule,
    KeyFilterModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class PrimeNgModule { }
