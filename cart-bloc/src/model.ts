export interface Product {
  id: number;
  name: string;
  color: string;
}

export interface CartItem {
  count: number;
  product: Product;
}

export interface CartAddition {
  product: Product;
  count: number;
}

export const products: Product[] = [
  { id: 1, name: 'Sweater', color: '#536DFE' },
  { id: 2, name: 'Socks', color: '#FFD500' },
  { id: 3, name: 'Shawl', color: '#1CE8B5' },
  { id: 4, name: 'Jacket', color: '#FF6C00' },
  { id: 5, name: 'Hat', color: '#574DDD' },
  { id: 6, name: 'Hoodie', color: '#ABD0F2' },
  { id: 7, name: 'Tuxedo', color: '#8DA0FC' },
  { id: 8, name: 'Shirt', color: '#1CE8B5' },
];
