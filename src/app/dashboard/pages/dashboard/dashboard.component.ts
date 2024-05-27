import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { PaginatorState } from 'primeng/paginator';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(
    private readonly productsService: ProductsService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getProducts().subscribe();
  }

  get limit() {
    return this.productsService.limit;
  }

  get page() {
    return this.productsService.page;
  }

  get products() {
    return this.productsService.products;
  }

  get metadata() {
    return this.productsService.metadata;
  }

  public getProducts(page: number = 1) {
    return this.productsService.getProducts(page)
  }


  public pageChange(event: PaginatorState) {
    const { page } = event;

    this.productsService.getProducts( page! + 1 )
      .subscribe();
  }

  public deleteProduct(sku: string) {
    this.productsService.deleteProduct(sku)
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Product Deleted',
          closable: true,
          detail: `Product with ${sku} was deleted`
        })
      });
  }
}
