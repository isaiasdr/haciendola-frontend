export interface ListProductsResponse {
  data: Product[];
  meta: Meta;
}

export interface Product {
  handle:       string;
  title:        string;
  description:  string;
  sku:          string;
  grams:        string;
  stock:        number;
  price:        string;
  comparePrice: string;
  barcode:      string;
}

export interface Meta {
  page:     number;
  total:    number;
  lastPage: number;
}
