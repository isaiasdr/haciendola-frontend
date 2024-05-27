import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {

  constructor(private readonly confirmationService: ConfirmationService) {}

  @Input()
  public products: Product[] = [];

  @Output()
  public onDeleteProduct = new EventEmitter<string>();
  public openUpdateModal: boolean = false;

  public selectedProduct?: Product;

  public deleteProduct(sku: string) {
    this.onDeleteProduct.emit(sku);
  }

  public showDialog(product: Product) {
    this.openUpdateModal = true;

    this.selectedProduct = product;
  }

  public hideDialog() {
    this.openUpdateModal = false;
    this.selectedProduct = undefined;
  }

  public confirmDelete(sku: string) {
    this.confirmationService.confirm({
      header: `Delete ${sku}`,
      message: 'Do you want to delete this record?',
      accept: () => this.deleteProduct(sku),
      icon: 'pi pi-exclamation-circle',
      acceptLabel: 'Delete',
      acceptIcon: 'pi pi-trash',
      acceptButtonStyleClass: 'gap-2',
      rejectLabel: 'Close'
    })
  }
}
