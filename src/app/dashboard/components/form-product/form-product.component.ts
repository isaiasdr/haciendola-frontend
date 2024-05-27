import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces';
import { ProductsService } from '../../services/products.service';
import { tap } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent implements OnChanges {

  @Input() isOpen: boolean = false;
  @Input() productData?: Product;

  @Output() onHide = new EventEmitter();

  private fb = inject(FormBuilder);

  constructor(
    private readonly productService: ProductsService,
    private readonly messageService: MessageService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productData']?.currentValue !== undefined) {
      this.productForm.patchValue(changes['productData'].currentValue);
      this.productForm.controls['sku'].reset({ value: changes['productData'].currentValue['sku'], disabled: true })
    }
  }

  public hideDialog() {
    this.onHide.emit();
  }

  public productForm: FormGroup = this.fb.group({
    sku: [ '', [Validators.required,  ] ],
    barcode: [ '', [Validators.required, ] ],
    comparePrice: [ 0, [Validators.required, Validators.min(0) ] ],
    description: [ '', [Validators.required, ] ],
    grams: [ 0, [Validators.required, Validators.min(0)] ],
    handle: [ '', [Validators.required, ] ],
    price: [ 0, [Validators.required, Validators.min(0) ] ],
    stock: [ 0, [Validators.required, Validators.min(0) ] ],
    title: [ '', [Validators.required, ] ],
  });

  private mapToProduct = (productData: Product): Product => {

    const product: Product = {
      ...productData,
      stock: +productData.stock,
      price: Number(productData.price).toFixed(2),
      comparePrice: Number(productData.comparePrice).toFixed(2),
      grams: Number(productData.grams).toFixed(2),
    };

    return product;
  }

  public saveProduct() {
    const product: Product = this.mapToProduct(this.productForm.getRawValue());

    const observableRequest = this.productData
      ? this.productService.updateProduct(product)
      : this.productService.createProduct(product);

    observableRequest
      .pipe(
        tap( () => {
          this.isOpen = false;
        })
      )
      .subscribe(
        {
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: this.productData ? `Product Updated` : `Product Created`,
              closable: true,
              detail: `Product with sku: ${product.sku} was ${ this.productData ? 'Updated' : 'Created' }`
            })
          },
          error: (message) => {
            this.messageService.add({
              severity: 'error',
              summary: `Error`,
              closable: true,
              detail: message
            })
          }


        }
      )
  }
}
