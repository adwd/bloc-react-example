export interface Product {
  id: number;
  name: string;
  color: string;
}

export interface CartItem {
  count: number;
  product: Product;
}
